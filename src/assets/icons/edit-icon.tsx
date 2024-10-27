import { IconProps } from "../../@types/icon";

function EditIcon({ width, height, color }: IconProps) {
  return (
    <svg
      width={width ? width : "14"}
      height={height ? height : "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.583984 12.9707H12.834"
        stroke="white"
        stroke-width="1.15877"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M12.1978 1.67482L10.7439 0.333225C10.5445 0.14919 10.2336 0.161676 10.0496 0.361113L2.93595 8.07009C2.75191 8.26953 2.7644 8.58039 2.96384 8.76443L4.41771 10.106C4.61714 10.2901 4.92801 10.2776 5.11205 10.0781L12.2257 2.36916C12.4097 2.16972 12.3972 1.85886 12.1978 1.67482Z"
        fill={color ? color : "white"}
      />
      <path
        d="M1.99021 11.821L3.97277 11.2228C4.28468 11.1288 4.37868 10.7271 4.13514 10.505L2.55849 9.07358C2.31494 8.85139 1.92612 8.97957 1.86203 9.3043L1.45612 11.3339C1.39203 11.6458 1.68685 11.9107 1.99021 11.821Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
}

export default EditIcon;
