import useMetronemeStore from "../store/index";
import Dropdown from "./dropdown-menu";

type optionType = {
  value: [number, number];
  label: string;
};

const beatOption: optionType[] = [
  { value: [3, 4], label: "3/4" },
  { value: [4, 4], label: "4/4" },
  { value: [5, 4], label: "5/4" },
  { value: [6, 8], label: "6/8" },
  { value: [7, 8], label: "7/8" },
];

const BeatSelector = () => {
  const { metronome, setBeat } = useMetronemeStore((state) => state);
  const handleClickOption = (value: [number, number]) => {
    setBeat(value);
  };
  const displayBeat = metronome.beat.join("/");

  return (
    <Dropdown
      value={displayBeat}
      options={beatOption}
      onSelect={handleClickOption}
    />
  );
};
export default BeatSelector;
