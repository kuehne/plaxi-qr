import { Icon } from "../model/Icon.enum";

interface SvgIconProps {
  icon: Icon;
  className?: string;
}

export default function SvgIcon({ icon, className }: Readonly<SvgIconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className ?? "size-6"}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
}
