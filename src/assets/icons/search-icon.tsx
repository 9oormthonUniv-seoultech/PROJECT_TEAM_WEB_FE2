import { IconProps } from "../../@types/icon";

function SearchIcon({ width, height, color }: IconProps) {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.445 18.9803C15.3247 18.9803 19.2805 15.0244 19.2805 10.1447C19.2805 5.26491 15.3247 1.30908 10.445 1.30908C5.5652 1.30908 1.60938 5.26491 1.60938 10.1447C1.60938 15.0244 5.5652 18.9803 10.445 18.9803Z"
        stroke="#171D24"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M16.8984 17.2012L22.3883 22.6911"
        stroke="#171D24"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SearchIcon;
