import { MouseEventHandler } from "react";
import { Icon } from "../model/Icon.enum";
import SvgIcon from "./SvgIcon";

interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  label: string;
  icon?: Icon;
}

export default function Button({ action, label, icon }: Readonly<ButtonProps>) {
  const iconSVG = <SvgIcon icon={icon!} />;

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
