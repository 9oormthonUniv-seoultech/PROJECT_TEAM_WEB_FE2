import { IconProps } from "../../@types/icon";

function CloseIcon({ color }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame">
        <path
          id="Vector"
          d="M2.5 2.5L21.5 21.5"
          stroke={color === "default" ? "#676F7B" : "#FFFFFF"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M21.5 2.5L2.5 21.5"
          stroke={color === "default" ? "#676F7B" : "#FFFFFF"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

export default CloseIcon;
