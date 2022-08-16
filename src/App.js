import { React } from 'react';
import './App.css';

import CardPokemon from './components/card-pokemon/CardPokemon';
import ListaPokemon from './components/lista-pokemon/ListaPokemon';

function App() {

 return (
    <div className="App">
      
      <section className='cardPai'>  
      <ListaPokemon />        
      </section>
      <section className='cardPai'>
          <CardPokemon />
      </section>
      
    </div>
  );
}

export default App;
