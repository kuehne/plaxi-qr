import { Dispatch, SetStateAction, useState } from "react";
import QRCode from "react-qr-code";
import AdvancedOptions from "./components/AdvancedOptions";
import ButtonGroup from "./components/ButtonGroup";
import Query from "./components/Query";
import { Constants } from "./model/Constants.class";
import { QrState } from "./model/QrState.interface";

function handleInputChange(
  value: string,
  setState: Dispatch<SetStateAction<QrState>>,
): void {
  setState((state) => ({
    ...state,
    value,
  }));
}

function App() {
  const [state, setState] = useState<QrState>({
    value: "",
    fgColor: Constants.FOREGROUND_COLOR,
    bgColor: Constants.BACKGROUND_COLOR,
    size: Constants.SIZE,
  });
  return (
    <div className="container flex justify-between flex-col h-full">
      <div className="print:hidden py-4 px-2">
        <Query
          value={state.value}
          handleChange={(newValue: string) =>
            handleInputChange(newValue, setState)
          }
        />
      </div>
      <div className="flex justify-center p-2">
        <QRCode
          value={state.value}
          size={Math.min(
            state.size,
            document.getElementById("root")?.clientWidth ?? state.size,
          )}
          fgColor={state.fgColor}
          bgColor={state.bgColor}
          level="Q"
          id={Constants.QR_CODE_ELEMENT_ID}
        />
      </div>
      <div className="px-2">
        <ButtonGroup />
        <AdvancedOptions state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
