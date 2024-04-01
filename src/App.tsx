import { Dispatch, SetStateAction, useState } from "react";
import AdvancedOptions from "./components/AdvancedOptions";
import ButtonGroup from "./components/ButtonGroup";
import QrWrapper from "./components/QrWrapper";
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
    <div className="container flex h-full flex-col justify-between">
      <div className="px-2 py-4 print:hidden">
        <Query
          value={state.value}
          handleChange={(newValue: string) =>
            handleInputChange(newValue, setState)
          }
        />
      </div>
      <div className="px-2">
        <QrWrapper state={state} />
      </div>
      <div className="px-2">
        <ButtonGroup />
        <AdvancedOptions state={state} setState={setState} />
      </div>
    </div>
  );
}

export default App;
