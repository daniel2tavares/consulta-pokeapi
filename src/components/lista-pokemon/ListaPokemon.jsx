import React, { useEffect, useState } from "react";
import api from '../../services/api'

function ListaPokemon() {

    const [data, setData] = useState([]);


    useEffect(() => {
        api.get('pokemon/?offset=0&limit=5')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log('falta de conexao com a api')
            })
    }, []);

    

    return (
        <div className="lista-pokemons">

            <h1>Pokemons</h1>

            {
                data && data.results.map((result) => {

                    return (

                        <h3 key={result.name}>{result.name}</h3>


                    )
                })
            }
        </div>
    )

}



export default ListaPokemon;