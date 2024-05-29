import { useStateValue } from "../contexts/useReducer";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";

export default function SoundSwitcher() {
  const { dispatch, music } = useStateValue();

  return (
    <button
      className="text-[var(--primaryText)]"
      onClick={() => dispatch({ type: "toggleMusic" })}
    >
      {music ? (
        <IoVolumeHighOutline size={40} />
      ) : (
        <IoVolumeMuteOutline size={40} />
      )}
    </button>
  );
}
