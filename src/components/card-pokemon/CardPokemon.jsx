import React from "react";
import '../../components/card-pokemon/CardPokemon.css'
import ListaPokemon from "../lista-pokemon/ListaPokemon";

function CardPokemon(){

    return(
        <div className="card-pokemon">
         <img src=''></img>
         <h2>Nome do Pokemon</h2>
            <div className="displayPokemon">
                <div>TIPO 1</div>
                <div>TIPO 2</div>
            </div>
            <div className="display-progress">
               <h5>HP</h5> <p className="progress-bar"></p>
            </div>
            <div className="display-progress">
               <h5>ATACK</h5><p className="progress-bar"></p>
            </div>
            <div className="display-progress">
               <h5>DEFENSE</h5><p className="progress-bar"></p>
            </div>
            <div className="display-progress">
               <h5>SPEED</h5><p className="progress-bar"></p>
            </div>
        </div>
              
    )

}

export default CardPokemon;