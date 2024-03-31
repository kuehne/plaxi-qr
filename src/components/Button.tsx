import { MouseEventHandler } from "react";
import { Icon } from "../model/Icon.enum";

interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  label: string;
  icon?: Icon;
}

export default function Button({ action, label, icon }: Readonly<ButtonProps>) {
  const iconSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );

  return (
    <button
      className="mb-2 me-2 flex gap-2 rounded-lg border border-gray-700 px-5 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300"
      onClick={action}
    >
      {!!icon && iconSVG}
      {label}
    </button>
  );
}
