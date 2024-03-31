import { ChangeEvent } from "react";

interface QueryProps {
  value: string;
  handleChange: (newValue: string) => void;
}

export default function Query({ value, handleChange }: Readonly<QueryProps>) {
  return (
    <input
      placeholder="Please enter your text"
      value={value}
      maxLength={2900} // see: https://github.com/rosskhanas/react-qr-code/issues/255
      className="mb-4 block w-full rounded-lg border border-gray-300 bg-white p-3 text-xl text-black focus:border-blue-500 focus:ring-blue-500"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleChange(e.target.value)
      }
    />
  );
}
