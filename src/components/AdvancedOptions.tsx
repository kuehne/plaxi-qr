import { Dispatch, SetStateAction } from "react";
import { QrState } from "../model/QrState.interface";
import ColorPicker from "./ColorPicker";

interface AdvancedOptionsProps {
  state: QrState;
  setState: Dispatch<SetStateAction<QrState>>;
}

export default function AdvancedOptions({
  state,
  setState,
}: Readonly<AdvancedOptionsProps>) {
  return (
    <div className="print:hidden">
      <form className="mx-auto flex flex-wrap justify-center gap-2">
        <ColorPicker
          color="fgColor"
          setState={setState}
          state={state}
          label="Foreground color"
        />
        <ColorPicker
          color="bgColor"
          setState={setState}
          state={state}
          label="Background color"
        />
      </form>
    </div>
  );
}
