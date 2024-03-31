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
      className="me-2 inline-flex items-center rounded-full bg-black p-1.5  text-center text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
    >
      <SvgIcon icon={icon} className="size-4" />
      <span className="sr-only">{description}</span>
    </button>
  );
}
