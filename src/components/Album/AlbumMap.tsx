import MapContainer from "../Common/MapContainer";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import CustomMarker from "../../assets/icons/booth-marker";
import { useEffect, useState } from "react";
import ActiveCustomMarker from "../../assets/icons/active-booth-marker";
import { getLogoUrl } from "../../hooks/getImageUrl";
import { getCurrentLocation } from "../../hooks/getLocation";
import { useQuery } from "@tanstack/react-query";
import useBoothFilterStore from "../../store/useBoothFilterStore";
import { getBoothLatLng } from "../../api/booth";

export default function AlbumMap() {
  const { lat, lng, selectedBrands } = useBoothFilterStore();
  const [activeId, setActiveId] = useState<number>(-1);

  //처음 페이지 접속 시 사용자의 현 위치를 받아와서 center 세팅
  useEffect(() => {
    //현 위치 받아오기
    const fetchLocation = async () => {
      const res = await getCurrentLocation();
      if (res) {
        useBoothFilterStore.setState({
          lat: res.lat,
          lng: res.lng,
        });
      }
    };

    fetchLocation();
  }, []);

  const handleClick = (id: number) => {
    if (activeId === id) {
      setActiveId(-1);
    } else {
      setActiveId(id);
    }
  };

  return (
    <MapContainer lat={lat} lng={lng}>
      {/* CustomOverlayMap으로 커스텀 마커를 직접 렌더링 */}

      {/* 클릭 시 해당 포토부스에 해당 되는 모달창 렌더링 */}
      {/*{activeId >= 0 && <BoothModal boothId={activeId.toString()} />}*/}
    </MapContainer>
  );
}
