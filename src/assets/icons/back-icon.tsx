import { IconProps } from "../../@types/icon";

function BackIcon({ color }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 2L7 11.7561L17 22"
        stroke={color === "grey" ? "#676F7B" : "#FFFFFF"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default BackIcon;

