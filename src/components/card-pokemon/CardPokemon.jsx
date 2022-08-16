import React, { useEffect, useState } from "react";
import '../../components/card-pokemon/CardPokemon.css'
import ListaPokemon from "../lista-pokemon/ListaPokemon";


function CardPokemon(props){   

     return(
        <div className="card-pokemon">
         <img src={props.dataCard.sprites.front_shiny}></img>
         <h2>{props.dataCard.name}</h2>
            <div className="displayPokemon">
                <div>{props.dataCard.types[0].type.name}</div>
                <div>{props.dataCard.types[1].type.name}</div>
            </div>
            <div className="display-progress">
               <h5>{(props.dataCard.stats[0].stat.name).toUpperCase()}  <progress max ='100' value={props.dataCard.stats[0].base_stat} className="progress-bar"></progress></h5> 
               <h5>{(props.dataCard.stats[1].stat.name).toUpperCase()}  <progress max ='100' value={props.dataCard.stats[1].base_stat} className="progress-bar"></progress></h5> 
               <h5>{(props.dataCard.stats[2].stat.name).toUpperCase()}  <progress max ='100' value={props.dataCard.stats[2].base_stat} className="progress-bar"></progress></h5>
               <h5>{(props.dataCard.stats[5].stat.name).toUpperCase()}  <progress max ='100' value={props.dataCard.stats[5].base_stat} className="progress-bar"></progress></h5>                    
            </div>      
        </div>
              
    )

}

export default CardPokemon;