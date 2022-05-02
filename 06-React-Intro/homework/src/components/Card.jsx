import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div>
        <p>Max</p>
        <p>{props.max}</p>
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt=""
      />
    </div>
  );
}
