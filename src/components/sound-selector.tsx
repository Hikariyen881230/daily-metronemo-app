import useMetronemeStore from "@/store";
import Dropdown from "./dropdown-menu";
import defaulSound from "../assets/sound/default.mp3";
import stickSound from "../assets/sound/stick.mp3";

type optionType = {
  value: string;
  label: string;
};

const soundOption: optionType[] = [
  { value: defaulSound, label: "Default" },
  { value: stickSound, label: "Stick" },
];

const SoundSelector = () => {
  const { metronome, setSound } = useMetronemeStore((state) => state);
  const handleClickOption = (value: string) => {
    setSound(value);
  };
  const current = soundOption.filter(
    (sound) => sound.value === metronome.sound
  );
  const displaySoundLabel = current[0].label;

  return (
    <Dropdown
      value={displaySoundLabel}
      onSelect={handleClickOption}
      options={soundOption}
    />
  );
};
export default SoundSelector;
