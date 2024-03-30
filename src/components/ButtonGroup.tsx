import { Constants } from "../Constants";
import { Icon } from "../Icon.enum";
import Button from "./Button";

function handleDownload(): void {
  const svg = document.getElementById(Constants.QR_CODE_ELEMENT_ID)!;
  const base64Content = btoa(
    decodeURIComponent(encodeURIComponent(svg.outerHTML)),
  );
  const link = document.createElement("a");
  link.download = "qr.svg";
  link.href = `data:image/svg+xml;base64,${base64Content}`;
  link.click();
  link.remove();
}

export default function ButtonGroup() {
  return (
    <div className="mt-4 flex justify-center print:hidden">
      <Button action={handleDownload} label="Download" icon={Icon.DOWLOAD} />
      <Button action={() => window.print()} label="Print" icon={Icon.PRINT} />
    </div>
  );
}
