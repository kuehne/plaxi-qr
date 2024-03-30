import { Dispatch, useState } from "react";
import QRCode from "react-qr-code";

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

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <Query value={value} handleChange={setValue} />
      <div className="flex justify-center p-4">
        <QRCode value={value} size={400} />
      </div>
    </div>
  );
}

export default App;
