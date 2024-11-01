import { IconProps } from "../../@types/icon";

export default function AlbumDeleteIcon({ width, height, color }: IconProps) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill={color ? color : "#5453EE"} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.8643 3.11768H3.13573C2.50849 3.11768 2 3.57634 2 4.14214V5.97242C2 6.53821 2.50849 6.99688 3.13573 6.99688H20.8643C21.4915 6.99688 22 6.53821 22 5.97242V4.14214C22 3.57634 21.4915 3.11768 20.8643 3.11768Z"
        fill={color ? color : "#5453EE"}/>
      <path
        d="M19.5542 25.0002H4.8728C4.29109 25.0002 3.80632 24.6004 3.744 24.082L2.10965 9.30849C2.04039 8.70881 2.56671 8.18408 3.23846 8.18408H20.7731C21.431 8.18408 21.9504 8.69007 21.9019 9.2835L20.6969 24.057C20.6554 24.5879 20.1637 25.0002 19.5681 25.0002H19.5542Z"
        fill={color ? color : "#5453EE"}/>
      <path
        d="M6.09961 4.01091V1.91827C6.09961 1.41228 6.71595 1 7.4708 1H16.529C17.2907 1 17.9002 1.41228 17.9002 1.91827V3.24881"
        stroke={color ? color : "#5453EE"} stroke-width="2" stroke-miterlimit="10"/>
      <path d="M12.0898 10.9634V22.3886" stroke="white" stroke-width="1.3" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M17.2625 11.0073L16.1406 22.3888" stroke="white" stroke-width="1.3" stroke-linecap="round"
            stroke-linejoin="round"/>
      <path d="M6.73438 11.0386L8.20252 22.3888" stroke="white" stroke-width="1.3" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
);
}
