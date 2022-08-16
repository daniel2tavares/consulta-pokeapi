import React, { useEffect, useState } from "react";
import api from '../../services/api'
import './ListaPokemon.css'
import ButtonPn from "../button-prev-nex/ButtonPn";

function ListaPokemon() {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);


    function avancarLista() {

        while (count < 1154) {
            setCount(count + 6)
        }

    }

    function voltarLista() {
        if (count === 0) {
            setCount(0)
        } else {
            setCount(count - 6)
        }
    }

    useEffect(() => {
        api.get(`pokemon/?offset=${count}&limit=6`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log('falta de conexao com a api')
            })
    }, [count]);

    return (
        <>
            <div className="lista-pokemons">

                <h1>Pokemons</h1>
                {
                    data && data.results && data.results.map((result) => {

                        return (
                            <h3 key={result.name}>{result.name}</h3>
                        )
                    })
                }

            </div>
            <div className='buttons'>
                <ButtonPn event={voltarLista} name='Prev' />
                <ButtonPn event={avancarLista} name='Next' />
            </div>
        </>
    )

}

export default ListaPokemon;