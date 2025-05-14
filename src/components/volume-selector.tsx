import useMetronomeStore from "@/store";

export default function VolumeSelector() {
  const { metronome, setStrongVolume, setWeakVolume } = useMetronomeStore(
    (state) => state
  );
  return (
    <div>
      <h3 className="text-base">Strong Beat</h3>
      <input
        className="strong rounded-lg overflow-hidden appearance-none bg-bar h-3 w-full"
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={metronome.strongVolume}
        onChange={(e) => setStrongVolume(parseFloat(e.target.value))}
      />
      <h3 className="text-base">Weak Beat</h3>
      <input
        className="weak rounded-lg overflow-hidden appearance-none bg-bar h-3 w-full"
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={metronome.weakVolume}
        onChange={(e) => setWeakVolume(parseFloat(e.target.value))}
      />
    </div>
  );
}
