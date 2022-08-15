import { React } from 'react';
import './App.css';
import ButtonPn from './components/button-prev-nex/ButtonPn'
import CardPokemon from './components/card-pokemon/CardPokemon';
import ListaPokemon from './components/lista-pokemon/ListaPokemon';

function App() {

 return (
    <div className="App">
      
      <section className='cardPai'>  
      <ListaPokemon />  
        <div className='buttons'>
          <ButtonPn name='Prev' />
          <ButtonPn name='Next' />
        </div>
      </section>
      <section className='cardPai'>
          <CardPokemon />
      </section>

    </div>
  );
}

export default App;
