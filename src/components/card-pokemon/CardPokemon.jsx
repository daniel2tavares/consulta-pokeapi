import React, { useEffect, useState } from "react";
import '../../components/card-pokemon/CardPokemon.css'
import api from "../../services/api";


function CardPokemon(){

   const [data2, setData2] = useState([]);
   const [pokeActive, setPokeActive] = useState('bulbasaur')

    function changePoke(){
        setPokeActive('charmander')
    }

   useEffect(() => {
      api.get(`pokemon/${pokeActive}`)
          .then((response) => {
              setData2(response.data);
          })
          .catch((error) => {
              console.log('falta de conexao com a api')
          })
  },[pokeActive]);

    return(
        <div className="card-pokemon">
         <img src={data2.sprites.front_shiny}></img>
         <h2>{data2.name}</h2>
            <div className="displayPokemon">
                <div>{data2.types[0].type.name}</div>
                <div>{data2.types[1].type.name}</div>
            </div>
            <div className="display-progress">
               <h5>{(data2.stats[0].stat.name).toUpperCase()}  <progress max ='100' value={data2.stats[0].base_stat} className="progress-bar"></progress></h5> 
               <h5>{(data2.stats[1].stat.name).toUpperCase()}  <progress max ='100' value={data2.stats[1].base_stat} className="progress-bar"></progress></h5> 
               <h5>{(data2.stats[2].stat.name).toUpperCase()}  <progress max ='100' value={data2.stats[2].base_stat} className="progress-bar"></progress></h5>
               <h5>{(data2.stats[5].stat.name).toUpperCase()}  <progress max ='100' value={data2.stats[5].base_stat} className="progress-bar"></progress></h5>                    
            </div>
        </div>
              
    )

}

export default CardPokemon;