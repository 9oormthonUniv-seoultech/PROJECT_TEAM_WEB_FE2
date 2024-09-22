// const getIp = async () =>
//   await fetch("https://geolocation-db.com/json/")
//     .then((res) => res.json())
//     .then((res) => res["IPv4"]);

// export const getLocation = async () => {
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
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      return { lat: lat, lng: lon };
    });
  }
  //사용할 수 없을 경우 기본 위치 리턴
  return { lat: 37.63763525003301, lng: 127.07945581420265 };
};
