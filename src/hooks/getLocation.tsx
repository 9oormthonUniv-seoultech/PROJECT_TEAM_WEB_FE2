const getIp = async () =>
  await fetch("https://geolocation-db.com/json/")
    .then((res) => res.json())
    .then((res) => res["IPv4"]);

export const getLocation = async () => {
  const nowIp = await getIp();
  const geoData = await fetch(`http://ip-api.com/json/${nowIp}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });

  if (geoData) {
    const latitude = geoData.lat;
    const longitude = geoData.lon;

    return { lat: latitude, lng: longitude };
  }
};
