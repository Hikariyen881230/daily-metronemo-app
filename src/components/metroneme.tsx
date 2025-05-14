import { CiPlay1, CiPause1 } from "react-icons/ci";
import CustomButton from "./custom-button";
import BpmSelector from "./bpm-selector";
import BeatSelector from "./beat-selector";
import useMetronomeStore from "@/store";
import BeatAppearance, { BeatList } from "./beat-appearance";
import { useEffect, useRef, useState } from "react";
import { getCurrentTimeIntervals } from "@/utils/metroneme";
import PracticeRecord from "./practice-record";
import SoundSelector from "./sound-selector";
import VolumeSelector from "./volume-selector";

export default function Metroneme() {
  const { metronome, setIsPlaying } = useMetronomeStore((state) => state);
  const { isPlaying, beat, bpm, sound, strongVolume, weakVolume } = metronome;
  const [beatCount, note] = beat;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [list, setList] = useState<BeatList[]>([]);
  const timeIntervals = getCurrentTimeIntervals({ bpm: bpm, note: note });
  const audioContextRef = useRef<AudioContext | null>(null);
  const soundBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new AudioContext();
    }

    const loadSound = async (url: string): Promise<AudioBuffer> => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      return await audioContextRef.current!.decodeAudioData(arrayBuffer);
    };

    const loadAudioBuffers = async () => {
      soundBufferRef.current = await loadSound(sound);
    };

    loadAudioBuffers();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [sound]);

  const playSound = (buffer: AudioBuffer | null, volume: number) => {
    if (audioContextRef.current && buffer) {
      const source = audioContextRef.current.createBufferSource();
      const gainNode = audioContextRef.current.createGain();

      gainNode.gain.setValueAtTime(volume, audioContextRef.current.currentTime); // volume 應該是 0.0 ~ 1.0

      source.buffer = buffer;
      source.connect(gainNode).connect(audioContextRef.current.destination);
      source.start(0);
    }
  };

  useEffect(() => {
    setList(
      Array.from({ length: beatCount }, (_, i) => ({
        id: i + 1,
        isActive: false,
      }))
    );
  }, [beatCount]);

  useEffect(() => {
    let intervalId: number;

    const playBeat = () => {
      // 提前計算下一次的 index
      const nextIndex = (currentIndex + 1) % beatCount;

      setList((prevList) => {
        const updatedList = prevList.map((item, index) => ({
          ...item,
          isActive: index === currentIndex,
        }));
        return updatedList;
      });

      // 音量
      const frequency = currentIndex === 0 ? strongVolume : weakVolume;
      playSound(soundBufferRef.current, frequency);

      setCurrentIndex(nextIndex);
    };

    if (isPlaying) {
      intervalId = window.setInterval(playBeat, timeIntervals);
    } else {
      setList((prevList) =>
        prevList.map((item) => ({ ...item, isActive: false }))
      );
      setCurrentIndex(0);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, bpm, beatCount, currentIndex, timeIntervals]);

  return (
    <div className="py-12 px-6">
      <div data-aos="fade-up">
        <h1 className="text-center text-3xl md:text-4xl tracking-wide">
          Daily Metronome
        </h1>
        <p className="text-center">Provided by Liu</p>
      </div>
      <BeatAppearance list={list} />
      <div
        className="flex flex-col md:flex-row w-full"
        data-aos="fade-zoom-in"
        data-aos-delay="1200"
      >
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start  text-center md:text-left">
          <div className="flex flex-col gap-2 md:gap-1 text-xl">
            <h2>Play</h2>
            <CustomButton
              onClick={() => setIsPlaying(!isPlaying)}
              className={"w-[300px] h-9 flex justify-center"}
            >
              {isPlaying ? <CiPause1 /> : <CiPlay1 />}
            </CustomButton>
          </div>
          <div className="text-xl">
            <h2 className="my-2 md:my-1">Bpm</h2>
            <BpmSelector />
            <h2 className="my-2 md:my-1">Beat</h2>
            <BeatSelector />
            <h2 className="my-2 md:my-1">Sound</h2>
            <SoundSelector />
            <h2 className="my-2 md:my-1">Volume</h2>
            <VolumeSelector />
          </div>
        </div>
        <div className="mt-6 md:mt-0 w-full md:w-1/2">
          <PracticeRecord />
        </div>
      </div>
    </div>
  );
}
