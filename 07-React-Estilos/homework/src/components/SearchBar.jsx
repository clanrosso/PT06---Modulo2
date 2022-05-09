import React from "react";
import s from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
      <input className={s.input} type={"text"} placeholder="Ciudad..."></input>
      <button className={s.boton} onClick={() => props.onSearch()}>
        Agregar
      </button>
    </div>
  );
}
