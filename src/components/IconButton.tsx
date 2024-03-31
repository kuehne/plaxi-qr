import { Icon } from "../model/Icon.enum";
import SvgIcon from "./SvgIcon";

interface IconButtonProps {
  icon: Icon;
  description: string;
  handleClick: () => void;
}
export default function IconButton({
  icon,
  description,
  handleClick,
}: Readonly<IconButtonProps>) {
  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-full p-1.5 text-center inline-flex items-center me-2"
    >
      <SvgIcon icon={icon} className="size-4" />
      <span className="sr-only">{description}</span>
    </button>
  );
}
