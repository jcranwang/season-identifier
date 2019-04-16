import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMsg] = useLocation();

  const renderPage = (latitude, error) => {
    if (error && !latitude) {
      return <div>Error: {error}</div>;
    }

    if (latitude && !error) {
      return <SeasonDisplay lat={latitude} />;
    }

    return <Spinner message="Please approve location request." />;
  };

  return <div>{renderPage(lat, errorMsg)}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
