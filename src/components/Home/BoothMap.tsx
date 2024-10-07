import MapContainer from "../Common/MapContainer";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import CustomMarker from "../../assets/icons/booth-marker";
import { useState } from "react";
import ActiveCustomMarker from "../../assets/icons/active-booth-marker";
import BoothModal from "./BoothModal";
import { getLogoUrl } from "../../hooks/getImageUrl";

function BoothMap() {
  const center = { lat: 37.6315083, lng: 127.0760196 };
  const [activeId, setActiveId] = useState<number>(0);
  const dummyData = [{ id: 1, type: "PLANBSTUDIO", lat: 37.6315083, lng: 127.0760196 }];

  const handleClick = (id: number) => {
    if (activeId === id) {
      setActiveId(0);
    } else {
      setActiveId(id);
    }
  };
  return (
    <MapContainer>
      {/* CustomOverlayMap으로 커스텀 마커를 직접 렌더링 */}
      {dummyData.map((data, index) => (
        <CustomOverlayMap position={{ lat: data.lat, lng: data.lng }} zIndex={1}>
          <div onClick={() => handleClick(data.id)} className="flex flex-col items-center">
            {activeId === data.id ? (
              <ActiveCustomMarker width={58} height={68} imageUrl={getLogoUrl(data.type)} color="#5453EE" />
            ) : (
              <CustomMarker width={44} height={50} imageUrl={getLogoUrl(data.type)} color="#2A303A" />
            )}
          </div>
        </CustomOverlayMap>
      ))}
      {/* 클릭 시 해당 포토부스에 해당 되는 모달창 렌더링 */}
      {activeId > 0 && <BoothModal />}
    </MapContainer>
  );
}

export default BoothMap;
