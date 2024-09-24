import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { getCurrentLocation, trackCurrentPosition } from "../../hooks/getLocation";
import PointSVG from "../../assets/images/point.svg?url";
import HeadingSVG from "../../assets/images/heading.svg?url";
type MapContainerProps = {
  lat?: number;
  lng?: number;
  children?: React.ReactNode;
};

function MapContainer({ lat, lng, children }: MapContainerProps) {
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });
  const [position, setPosition] = useState<{ lat: number; lng: number; heading: number | null }>({
    lat: 0,
    lng: 0,
    heading: null,
  });
  useEffect(() => {
    // 사용자 위치 및 방향을 추적하고 업데이트하는 콜백 함수
    const stopTracking = trackCurrentPosition(setPosition);

    return () => {
      // 컴포넌트가 언마운트될 때 위치 추적을 멈춤
      stopTracking();
    };
  }, []);

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
      {/* 사용자 위치를 나타내는 원형 마커 */}
      <MapMarker
        position={{ lat: position.lat, lng: position.lng }}
        image={{
          src: PointSVG,
          size: {
            width: 20,
            height: 20,
          },
        }}
      />
      {/* 방향을 나타내는 화살표 마커 */}
      {position.heading !== null && (
        <MapMarker
          position={{ lat: geo.lat, lng: geo.lng }}
          image={{
            src: HeadingSVG,
            size: {
              width: 40,
              height: 40,
            },
            options: {
              // 화살표 회전
              offset: {
                x: 20,
                y: 20,
              },
            },
          }}
          // style={{
          //   transform: `rotate(${position.heading}deg)`, // heading 값을 사용해 화살표 회전
          // }}
        />
      )}
      {children}
    </Map>
  );
}

export default MapContainer;
