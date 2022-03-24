import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";
import styled from 'styled-components';

const StyledBody = styled.div`
    text-align: center;
    background-color: rgba(182, 171, 199, 0.60);
    border-radius: 20px;
    width: 75%;
    margin: 2em;
`

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <StyledBody className="App">
      { data && <NasaPhoto photo={data} /> }
    </StyledBody>
  );
}

export default App;
