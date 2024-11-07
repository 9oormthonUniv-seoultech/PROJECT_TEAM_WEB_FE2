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
  
  //전체 포토부스 위치 정보 조회 api 호출
  const { isLoading, data } = useQuery({
    queryKey: ["getBoothLatLng", lat, lng, selectedBrands],
    queryFn: () => getBoothLatLng(lat, lng, selectedBrands!),
  });
  
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
      {!isLoading &&
        data &&
        data.map((item, index) => (
          <CustomOverlayMap position={{ lat: item.x, lng: item.y }} zIndex={1} key={index}>
            <div onClick={() => handleClick(item.id)} className="flex flex-col items-center">
              {activeId === item.id ? (
                <ActiveCustomMarker width={58} height={68} imageUrl={getLogoUrl(item.brand)} color="#5453EE" />
              ) : (
                <CustomMarker width={44} height={50} imageUrl={getLogoUrl(item.brand)} color="#2A303A" />
              )}
            </div>
          </CustomOverlayMap>
        ))}
      
      {/* 클릭 시 해당 포토부스에 해당 되는 모달창 렌더링 */}
      {/*{activeId >= 0 && <BoothModal boothId={activeId.toString()} />}*/}
    </MapContainer>
  );
}
