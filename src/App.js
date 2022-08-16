import { React, useEffect, useState } from "react";
import "./App.css";
import CardPokemon from "./components/card-pokemon/CardPokemon";
import ListaPokemon from "./components/lista-pokemon/ListaPokemon";
import api from "./services/api";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [data2, setData2] = useState(null);
  const [pokeActive, setPokeActive] = useState("bulbasaur");

  useEffect(() => {
    api
      .get(`pokemon/?offset=${count}&limit=6`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("falta de conexao com a api");
      });
  }, [count]);

  useEffect(() => {
    api
      .get(`pokemon/${pokeActive}`)
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log("falta de conexao com a api");
      });
  }, [pokeActive]);

  return (
    <div className="App">
      <section className="cardPai">
        <ListaPokemon
          changePoke={(value) => {
            setPokeActive(value);
          }}
          avancarLista={() => {
            if (count === 1154) {
              setCount(1154);
            } else {
              setCount(count + 6);
            }
          }}
          voltarLista={() => {
            if (count === 0) {
              setCount(0);
            } else {
              setCount(count - 6);
            }
          }}
          dataLista={data}
        />
      </section>
      <section className="cardPai">
        {data2 && <CardPokemon dataCard={data2} />}
      </section>
    </div>
  );
}

export default App;
