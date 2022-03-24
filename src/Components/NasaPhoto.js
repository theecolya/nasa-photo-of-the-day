import React from "react";
import styled from 'styled-components';

const StyledImage = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h3 {
    margin-top: 2em;
    padding-top: 1em;
    text-shadow: 0px 3px 6px rgba(59, 59, 59);
    text-transform: uppercase;
} 
img {
    width: 60%;
    border-radius: 10px;
}
p {
    width: 60%;
}
hr {
    width: 50%;
}
`
const NasaPhoto = (props) => {
    return (
        <StyledImage className="photo-container">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
            <hr></hr>
            <p>{props.photo.explanation}</p>
        </StyledImage>
    )
}

export default NasaPhoto;