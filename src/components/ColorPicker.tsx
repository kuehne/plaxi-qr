import { Dispatch, SetStateAction } from "react";
import { Constants } from "../model/Constants.class";
import { Icon } from "../model/Icon.enum";
import { QrState } from "../model/QrState.interface";
import IconButton from "./IconButton";

interface ColorPickerProps {
  state: QrState;
  label: string;
  color: "bgColor" | "fgColor";
  setState: Dispatch<SetStateAction<QrState>>;
}

export default function ColorPicker({
  state,
  color,
  setState,
  label,
}: Readonly<ColorPickerProps>) {
  return (
    <div className="mb-5 flex items-center justify-center gap-1">
      <label
        htmlFor={color}
        className="block text-sm font-medium text-gray-900"
      >
        {label}:
      </label>
      <input
        id={color}
        type="color"
        value={state[color]}
        onChange={(e) =>
          setState((state) => {
            const newState = { ...state };
            newState[color] = e.target.value;
            return newState;
          })
        }
      />
      <IconButton
        icon={Icon.UNDO}
        description={`Reset ${label.toLowerCase()}`}
        handleClick={() =>
          setState((state: QrState) => {
            const newState = { ...state };
            newState[color] =
              color === "bgColor"
                ? Constants.BACKGROUND_COLOR
                : Constants.FOREGROUND_COLOR;
            return newState;
          })
        }
      />
    </div>
  );
}
