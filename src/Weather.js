import React from "react";
//import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  IconBrokenCloudsDay,
  IconBrokenCloudsNight,
  IconClearSkyDay,
  IconClearSkyNight,
  IconFewCloudsDay,
  IconFewCloudsNight,
  IconMistDay,
  IconMistNight,
  IconRainDay,
  IconRainNight,
  IconScatteredCloudsDay,
  IconScatteredCloudsNight,
  IconShowerRainDay,
  IconShowerRainNight,
  IconSnowDay,
  IconSnowNight,
  IconThunderstormDay,
  IconThunderstormNight,
} from "./images";

export default function Weather(props) {
  //let apiKey = "7ctdc077a2e3a3ado6fe94bb8949bd5b";
  //let unit = "metric";
  //let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${unit}`;
  //axios.get(url).then(showWeather);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={IconClearSkyDay} alt="My SVG" />
          </Col>
          <Col>
            <h1>25°C</h1>
            <h2>Rotterdam</h2>
          </Col>
        </Row>
        <Form>
          <input type="text" />
          <Button className="btn-primary">Search</Button>
        </Form>
        <Row>
          <Col>
            <p>Mon</p>
            <img src={IconBrokenCloudsDay} alt="My SVG" />
            <p>5°C</p>
          </Col>
          <Col>
            <p>Tue</p>
            <img src={IconClearSkyDay} alt="My SVG" />
            <p>10°C</p>
          </Col>
          <Col>
            <p>Wed</p>
            <img src={IconBrokenCloudsNight} alt="My SVG" />
            <p>15°C</p>
          </Col>
          <Col>
            <p>Thu</p>
            <img src={IconClearSkyNight} alt="My SVG" />
            <p>20°C</p>
          </Col>
          <Col>
            <p>Fri</p>
            <img src={IconFewCloudsDay} alt="My SVG" />
            <p>25°C</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
