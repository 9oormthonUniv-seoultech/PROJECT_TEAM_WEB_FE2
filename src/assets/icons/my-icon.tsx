import { IconProps } from "../../@types/icon";

function MyIcon({ width, height, color }: IconProps) {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7222 11.4444C14.8825 11.4444 17.4444 8.88251 17.4444 5.72222C17.4444 2.56193 14.8825 0 11.7222 0C8.56193 0 6 2.56193 6 5.72222C6 8.88251 8.56193 11.4444 11.7222 11.4444Z"
        fill={color ? color : "#5453EE"}
      />
      <path
        d="M20.1065 23.8735H3.72312C1.6055 23.8735 0.311027 21.4041 1.38643 19.4524C3.50405 15.5889 7.42729 13 11.9148 13C16.4023 13 20.3255 15.5956 22.4431 19.4524C23.5185 21.4107 22.2241 23.8735 20.1065 23.8735Z"
        fill={color ? color : "#5453EE"}
      />
    </svg>
  );
}

export default MyIcon;
