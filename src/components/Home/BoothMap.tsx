import MapContainer from "../Common/MapContainer";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import CustomMarker from "../../assets/icons/booth-marker";
import { BoothLogoUrl } from "../../data/booth-categories";
import { useState } from "react";
import ActiveCustomMarker from "../../assets/icons/active-booth-marker";

function BoothMap() {
  const center = { lat: 37.6315083, lng: 127.0760196 };
  const [isActive, setIsActive] = useState<number>(0);
  const dummyData = [{ id: 1, type: "PLANB_STUDIO", lat: 37.6315083, lng: 127.0760196 }];

  // BoothLogoUrl에서 type에 맞는 url 찾기
  const getLogoUrl = (type: string) => {
    const logo = BoothLogoUrl.find((item) => item.id === type);
    return logo!.url; // 해당 type에 맞는 로고 URL 반환
  };

  return (
    <MapContainer>
      {/* <MapMarker
        position={center}
        image={{
          src: HaruMarker, // 마커이미지의 주소입니다
          size: {
            width: 80,
            height: 85,
          },
        }}
      /> */}
      {/* CustomOverlayMap으로 커스텀 마커를 직접 렌더링 */}
      {dummyData.map((data, index) => (
        <CustomOverlayMap position={{ lat: data.lat, lng: data.lng }} zIndex={1}>
          <div onClick={() => setIsActive(data.id)} className="flex flex-col items-center">
            {isActive === data.id ? (
              <ActiveCustomMarker width={58} height={68} imageUrl={getLogoUrl(data.type)} color="#5453EE" />
            ) : (
              <CustomMarker width={44} height={50} imageUrl={getLogoUrl(data.type)} color="#2A303A" />
            )}
          </div>
        </CustomOverlayMap>
      ))}
    </MapContainer>
  );
}

export default BoothMap;
