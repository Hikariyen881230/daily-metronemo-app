import { create } from 'zustand'
import defaulSound from '../assets/sound/default.mp3'

export type MetronomeState = {
    bpm: number;
    beat: [number, number];
    isPlaying: boolean;
    sound: string
    strongVolume: number
    weakVolume: number
}

type StoreType = {
    metronome: MetronomeState;
}

type StoreAction = {
    setBpm: (bpm: number) => void;
    setBeat: (beat: [number, number]) => void;
    setIsPlaying: (isPlaying: boolean) => void;
    setSound: (sound: string) => void;
    setStrongVolume: (volume: number) => void;
    setWeakVolume: (volume: number) => void;
}

const defaultValue: MetronomeState = {
    bpm: 120,
    beat: [4, 4],
    isPlaying: false,
    sound: defaulSound,
    strongVolume: 0.6,
    weakVolume: 0.3
}

export type MetronomeStoreType = StoreType & StoreAction

const useMetronomeStore = create<MetronomeStoreType>((set) => ({
    metronome: defaultValue,
    setBpm: (bpm: number) => set((state) => ({
        metronome: {
            ...state.metronome,
            bpm
        }
    })),
    setBeat: (beat: [number, number]) => set((state) => ({
        metronome: {
            ...state.metronome,
            beat
        }
    })),
    setIsPlaying: (isPlaying: boolean) => set((state) => ({
        metronome: {
            ...state.metronome,
            isPlaying
        }
    })),
    setSound: (sound: string) => set((state) => ({
        metronome: {
            ...state.metronome,
            sound
        }
    })),
    setStrongVolume: (volume: number) => set((state) => ({
        metronome: {
            ...state.metronome,
            strongVolume: volume
        }
    })),
    setWeakVolume: (volume: number) => set((state) => ({
        metronome: {
            ...state.metronome,
            weakVolume: volume
        }
    })),
}))

export default useMetronomeStore;