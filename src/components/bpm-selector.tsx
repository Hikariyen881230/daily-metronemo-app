import { FiMinus, FiPlus } from "react-icons/fi";
import NumberInput from "./number-input";
import CustomButton from "./custom-button";
import { useState } from "react";
import useMetronomeStore from "@/store";

export default function BpmSelector() {
  const { metronome, setBpm } = useMetronomeStore((state) => state);
  const [showInput, setShowInput] = useState(false);

  const handleBpmInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const match = e.target.value.match(/\d+/);
    if (match) {
      const number = parseInt(match[0], 10);
      if (number > 300) return 300;
      setBpm(number);
    }
  };
  const addBpm = () => {
    const newBpm = metronome.bpm + 5;
    if (newBpm > 300) {
      setBpm(300);
      return;
    }
    setBpm(newBpm);
  };
  const minusBpm = () => {
    const newBpm = metronome.bpm - 5;
    if (newBpm < 1) {
      setBpm(1);
      return;
    }
    setBpm(newBpm);
  };
  return (
    <div className="my-2 md:my-1 w-[300px] h-[35px] justify-between flex items-center">
      <CustomButton onClick={minusBpm}>
        <FiMinus /> 5
      </CustomButton>
      {showInput ? (
        <NumberInput
          value={metronome.bpm}
          onChange={handleBpmInput}
          style={{ textAlign: "center", width: "100%" }}
          onBlur={() => setShowInput(false)}
          autoFocus={showInput}
        />
      ) : (
        <span onClick={() => setShowInput(true)} className="cursor-pointer">
          {metronome.bpm}
        </span>
      )}
      <CustomButton onClick={addBpm}>
        <FiPlus /> 5
      </CustomButton>
    </div>
  );
}
