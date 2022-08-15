import React from "react";
import '../../components/card-pokemon/CardPokemon.css'

function CardPokemon(){

    return(
        <div className="card-pokemon">
         <img src="https://sm.ign.com/t/ign_br/news/a/a-pokemon-/a-pokemon-fan-has-crocheted-more-than-500-different-species_cd3x.620.jpg"></img>
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