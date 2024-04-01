import { useLayoutEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Constants } from "../model/Constants.class";
import { QrState } from "../model/QrState.interface";

interface QrWrapperProps {
  state: QrState;
}

function useQrWrapperClientWidth() {
  const [clientWidth, setClientWidth] = useState(0);
  useLayoutEffect(() => {
    function updateClientWidth() {
      setClientWidth(document.getElementById("qr-wrapper")?.clientWidth ?? 0);
    }
    window.addEventListener("resize", updateClientWidth);
    updateClientWidth();
    return () => window.removeEventListener("resize", updateClientWidth);
  });
  return clientWidth;
}

export default function QrWrapper({ state }: Readonly<QrWrapperProps>) {
  const clientWidth = useQrWrapperClientWidth();
  return (
    <div id="qr-wrapper" className="flex w-full justify-center">
      <QRCode
        value={state.value}
        size={Math.min(state.size, clientWidth, window.innerWidth)}
        fgColor={state.fgColor}
        bgColor={state.bgColor}
        level="Q"
        id={Constants.QR_CODE_ELEMENT_ID}
      />
    </div>
  );
}
