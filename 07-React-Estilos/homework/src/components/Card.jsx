import React from "react";
import s from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.tarjeta}>
      <button className={s.boton} onClick={props.onClose}>
        X
      </button>
      <h4 className={s.titulo}>{props.name}</h4>

      <div className={s.subContenedor}>
        <div className={s.temperatura}>
          <p>Max</p>
          <p>{props.max}</p>
        </div>

        <div className={s.temperatura}>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <img
          className={s.imagen}
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
}
