import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getCurrentLocation } from "../../hooks/getLocation";

type MapContainerProps = {
  lat?: number;
  lng?: number;
  children?: React.ReactNode;
};

function MapContainer({ lat, lng, children }: MapContainerProps) {
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    //현 위치 받아오기
    const fetchLocation = async () => {
      if (lat && lng) {
        // lat과 lng이 props로 전달되면 해당 값 사용
        setGeo({ lat, lng });
      } else {
        // 전달되지 않으면 현재 위치 가져오기
        const res = await getCurrentLocation();
        if (res) {
          setGeo(res);
        }
      }
    };

    fetchLocation();
  }, [lat, lng]);

  return (
    <Map
      id="map"
      level={3}
      center={{ lat: geo.lat, lng: geo.lng }}
      style={{ width: "100%", height: "calc(100vh - 60px)" }}
    >
      {children}
    </Map>
  );
}

export default MapContainer;
