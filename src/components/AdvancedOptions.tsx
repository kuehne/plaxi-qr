import { Dispatch, SetStateAction } from "react";
import { QrState } from "../qr-state";

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
      <form className="mx-auto flex max-w-sm justify-center gap-2">
        <div className="mb-5 flex items-center justify-center gap-1">
          <label
            htmlFor="foreground"
            className="block text-sm font-medium text-gray-900"
          >
            Foreground color:
          </label>
          <input
            id="foreground"
            type="color"
            value={state.fgColor}
            onChange={(e) =>
              setState((state) => ({
                ...state,
                fgColor: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-5 flex items-center justify-center gap-1">
          <label
            htmlFor="background"
            className="block text-sm font-medium text-gray-900"
          >
            Background color:
          </label>
          <input
            id="background"
            type="color"
            value={state.bgColor}
            onChange={(e) =>
              setState((state) => ({
                ...state,
                bgColor: e.target.value,
              }))
            }
          />
        </div>
      </form>
    </div>
  );
}
