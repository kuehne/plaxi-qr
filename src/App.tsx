import { Dispatch, SetStateAction, useState } from "react";
import QRCode from "react-qr-code";
import { Constants } from "./Constants";
import AdvancedOptions from "./components/AdvancedOptions";
import ButtonGroup from "./components/ButtonGroup";
import Query from "./components/Query";
import { QrState } from "./qr-state";

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
    <div className="container">
      <div className="print:hidden">
        <Query
          value={state.value}
          handleChange={(newValue: string) =>
            handleInputChange(newValue, setState)
          }
        />
      </div>
      <div className="flex justify-center p-4">
        <QRCode
          value={state.value}
          size={state.size}
          fgColor={state.fgColor}
          bgColor={state.bgColor}
          level="Q"
          id={Constants.QR_CODE_ELEMENT_ID}
        />
      </div>
      <ButtonGroup />
      <AdvancedOptions state={state} setState={setState} />
    </div>
  );
}

export default App;
