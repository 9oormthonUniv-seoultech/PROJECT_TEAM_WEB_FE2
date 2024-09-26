type MarkerProps = {
  width: number;
  height: number;
  imageUrl: string;
  color: string;
};

const ActiveCustomMarker = ({ width, height, imageUrl, color }: MarkerProps) => {
  // 마커 크기의 80%를 계산
  const imageSize = width * 0.55;

  const patternId = `pattern-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <svg width={width} height={height} viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={patternId} patternContentUnits="objectBoundingBox" width="1" height="1">
          <image
            href={imageUrl} // 전달받은 이미지 URL 사용
            width="1"
            height="1"
            preserveAspectRatio="xMidYMid slice" // 비율 유지
            onError={(e) => console.error("Image load error:", e)} // 이미지 로딩 에러 확인
          />
        </pattern>
      </defs>
      <path
        d="M0 5.3596V34.7945C0 36.7442 0.979158 38.5393 2.56814 39.4841L18.7758 49.1468C20.2531 50.0315 22.0482 50.0401 23.5341 49.1898L40.4375 39.4669C42.0608 38.5393 43.0744 36.7184 43.0744 34.7429V5.3596C43.0744 2.39636 40.8412 0 38.0927 0H4.98168C2.23317 0 0 2.39636 0 5.3596Z"
        fill={color}
      />
      <circle
        cx={width * 0.37} // 중심점을 마커의 가운데에 위치시키기 위해 x값과 y값 설정
        cy={height * 0.34}
        r={imageSize / 2}
        fill={`url(#${patternId})`} // 이미지가 이 원에 패턴으로 채워짐
      />
    </svg>
  );
};

export default ActiveCustomMarker;

<svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0 6.45488V41.905C0 44.2531 1.18205 46.4151 3.1003 47.553L22.6664 59.1904C24.4499 60.2558 26.6169 60.2662 28.4108 59.2421L48.8168 47.5323C50.7765 46.4151 52 44.2221 52 41.8429V6.45488C52 2.88608 49.3041 0 45.986 0H6.01396C2.69591 0 0 2.88608 0 6.45488Z"
    fill="#2A303A"
  />
</svg>;
