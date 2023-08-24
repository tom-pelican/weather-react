import React from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The weather for ${props.city} is ${response.data.temperature.current}`
    );
  }

  let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=7ctdc077a2e3a3ado6fe94bb8949bd5b&units=metric`;
  axios.get(url).then(showWeather);
  return (
    <TailSpin
      height="80"
      width="80"
      color="blue"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
