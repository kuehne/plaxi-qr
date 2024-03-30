import { Dispatch, useState } from "react";
import QRCode from "react-qr-code";
import { Icon } from "./Icon.enum";
import Button from "./components/Button";

const QR_CODE_ELEMENT_ID = "qr-code";
function Query({
  value,
  handleChange,
}: Readonly<{
  value: string;
  handleChange: Dispatch<React.SetStateAction<string>>;
}>) {
  return (
    <input
      placeholder="Please enter your text"
      value={value}
      maxLength={2900} // see: https://github.com/rosskhanas/react-qr-code/issues/255
      className="mb-4 block w-full rounded-lg border border-gray-300 bg-white p-3 text-xl text-black focus:border-blue-500 focus:ring-blue-500"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

function handleDownload(): void {
  const svg = document.getElementById(QR_CODE_ELEMENT_ID)!;
  const base64Content = btoa(
    decodeURIComponent(encodeURIComponent(svg.outerHTML)),
  );
  const link = document.createElement("a");
  link.download = "qr.svg";
  link.href = `data:image/svg+xml;base64,${base64Content}`;
  link.click();
  link.remove();
}

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="print:hidden">
        <Query value={value} handleChange={setValue} />
      </div>
      <div className="flex justify-center p-4">
        <QRCode value={value} size={400} level="Q" id={QR_CODE_ELEMENT_ID} />
      </div>
      <div className="flex print:hidden justify-center">
        <Button action={handleDownload} label="Download" icon={Icon.DOWLOAD} />
        <Button action={() => window.print()} label="Print" icon={Icon.PRINT} />
      </div>
    </div>
  );
}

export default App;
