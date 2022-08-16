import React, { useEffect, useState } from "react";
import './ListaPokemon.css'
import ButtonPn from "../button-prev-nex/ButtonPn";
import App from "../../App";

function ListaPokemon(props) {

    // function changePoke(){
    //     setPokeActive('charmander')
    // }

    // function avancarLista() {

    //     if(count===1154){
    //         setCount(1154)
    //     }else{
    //         setCount(count + 6)            
    //     }
    // }

    // function voltarLista() {
    //     if (count === 0) {
    //         setCount(0)
    //     } else {
    //         setCount(count - 6)
    //     }
    // }

    return (
        <>
            <div className="lista-pokemons">

                <h1>Pokemons</h1>
                {
                    props.dataLista && props.dataLista.results && props.dataLista.results.map((result) => {

                        return (
                            <h3 key={result.name}>{result.name}</h3>
                        )
                    })
                }

            </div>
            <div className='buttons'>
                {/* <ButtonPn event={voltarLista} name='Prev' />
                <ButtonPn event={avancarLista} name='Next' /> */}
            </div>
        </>
    )

}

export default ListaPokemon;