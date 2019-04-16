import {useState, useEffect} from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMsg, setError] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setError(err.message)
    );
  }, []);

  return [lat, errorMsg];
};

export default useLocation;