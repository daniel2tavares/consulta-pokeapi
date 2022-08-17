import React, { useEffect, useState } from "react";
import "../../components/card-pokemon/CardPokemon.css";
import ListaPokemon from "../lista-pokemon/ListaPokemon";
import App from "../../App";

const nomeAtributo = ["hp", "attack", "defense", "speed"];

function CardPokemon(props) {

    const [countEA, setCountEA]= useState(1)

  return (
    <div className="card-pokemon">
      <img
        onClick={()=> {
            setCountEA(countEA + 1)
            if(countEA == 3 && props.dataCard.name == 'pikachu' ){
              console.log(countEA)
                props.changeEgg()
            }
        }} 
        src={props.dataCard.sprites.front_shiny}
      ></img>
      <h2>{props.dataCard.name}</h2>
      <div className="displayPokemon">
        {props.dataCard &&
          props.dataCard.types &&
          props.dataCard.types.map((type) => {
            return <div>{type.type.name}</div>;
          })}
      </div>
      <div className="display-progress">
        {props.dataCard &&
          props.dataCard.stats
            .filter((stat) => nomeAtributo.includes(stat.stat.name))
            .map((status) => {
              return (
                <h5>
                  {status.stat.name.toUpperCase()}{" "}
                  <progress
                    max="100"
                    value={status.base_stat}
                    className="progress-bar"
                  ></progress>
                </h5>
              );
            })}
      </div>
    </div>
  );
}

export default CardPokemon;
