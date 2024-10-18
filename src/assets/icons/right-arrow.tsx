import { IconProps } from "../../@types/icon";

function RightArrowIcon({ width, height, color }: IconProps) {
  return (
    <svg
      width={width ? width : "7"}
      height={height ? height : "14"}
      viewBox="0 0 7 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12.5L6 7L1 1.5"
        stroke={color ? color : "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightArrowIcon;
