import React, { useEffect, useState } from "react";
import api from '../../services/api'
import './ListaPokemon.css'
import ButtonPn from "../button-prev-nex/ButtonPn";

function ListaPokemon() {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [count, setCount] = useState(0);
    const [pokeActive, setPokeActive] = useState('bulbasaur')

    function avancarLista(){
        
        while(count < 1154){
            setCount(count + 6)
        }
        
    }

    function voltarLista(){
        if (count === 0){
            setCount(0)
        }else{
            setCount(count - 6)
        }
    }

    function changePoke(){
        setPokeActive('charmander')
    }

    useEffect(() => {
        api.get(`pokemon/?offset=${count}&limit=6`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log('falta de conexao com a api')
            })
    },[count]);

    useEffect(() => {
        api.get(`pokemon/${pokeActive}`)
            .then((response) => {
                setData2(response.data);
            })
            .catch((error) => {
                console.log('falta de conexao com a api')
            })
    },[pokeActive]);

    return (
        <>
            <div className="lista-pokemons">

                <h1>Pokemons</h1>
                {
                    data && data.results && data.results.map((result) => {

                        return (
                            <h3 onClick={changePoke} key={result.name}>{result.name}</h3>
                        )
                    })
                }

            </div>
            <div className='buttons'>
                <ButtonPn event={voltarLista} name='Prev' />
                <ButtonPn event={avancarLista}  name='Next' />
            </div>
        </>
    )

}

export default ListaPokemon;