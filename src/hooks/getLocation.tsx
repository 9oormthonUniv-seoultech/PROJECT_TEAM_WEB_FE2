// const getIp = async () =>
//   await fetch("https://geolocation-db.com/json/")
//     .then((res) => res.json())
//     .then((res) => res["IPv4"]);

// export const getCurrentLocation = async () => {
//   const nowIp = await getIp();
//   const geoData = await fetch(`http://ip-api.com/json/${nowIp}`)
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       return res;
//     });

//   if (geoData) {
//     const latitude = geoData.lat;
//     const longitude = geoData.lon;

//     return { lat: latitude, lng: longitude };
//   }
// };

export const getCurrentLocation = async () => {
  if (navigator.geolocation) {
    return new Promise<{ lat: number; lng: number }>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          resolve({ lat, lng });
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  // 사용자의 위치 정보를 가져올 수 없는 경우, 기본 위치 리턴
  return { lat: 37.63763525003301, lng: 127.07945581420265 };
};

export const trackCurrentPosition = (
  onUpdate: (position: { lat: number; lng: number; heading: number | null }) => void
) => {
  if (navigator.geolocation) {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const heading = position.coords.heading; // 장치의 방향 정보
        console.log(lat, lng, heading);
        // 새로운 위치와 방향을 업데이트하는 콜백 호출
        onUpdate({ lat, lng, heading });
      },
      (error) => {
        console.error("Geolocation error:", error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    // 추적을 멈추고 싶을 때 호출할 수 있는 clear 함수 반환
    return () => navigator.geolocation.clearWatch(watchId);
  }

  console.error("Geolocation is not supported by this browser.");
  return () => {};
};
