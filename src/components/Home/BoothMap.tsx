import MapContainer from "../Common/MapContainer";
import { MapMarker } from "react-kakao-maps-sdk";
import HaruMarker from "../../assets/images/haru-marker.png";

function BoothMap() {
  const center = { lat: 36.8226, lng: 128.6274 };
  return (
    <MapContainer>
      <MapMarker
        position={center}
        image={{
          src: HaruMarker, // 마커이미지의 주소입니다
          size: {
            width: 80,
            height: 85,
          },
        }}
      />
    </MapContainer>
  );
}

export default BoothMap;
