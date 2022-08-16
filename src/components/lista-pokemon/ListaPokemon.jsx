import React, { useEffect, useState } from "react";
import './ListaPokemon.css'
import ButtonPn from "../button-prev-nex/ButtonPn";
import App from "../../App";

function ListaPokemon(props) {

       return (
        <>
            <div className="lista-pokemons">

                <h1>Pokemons</h1>
                {
                    props.dataLista && props.dataLista.results && props.dataLista.results.map((result) => {

                        return (
                            <h3 onClick={()=> props.changePoke(result.name)} key={result.name}>{result.name}</h3>
                        )
                    })
                }

            </div>
            <div className='buttons'>
                <ButtonPn event={props.voltarLista} name='Prev' />
                <ButtonPn event={props.avancarLista} name='Next' />
            </div>
        </>
    )

}

export default ListaPokemon;