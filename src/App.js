
import { useState } from 'react';
import imageRickMorthy from'../src/img/rick-morty.png';
import './App.css';
import Characters from './Components/Characters';


function App() {
const [characters, setCharacters] =useState (null);
  const reqApi =  async ( ) =>{
   const Api = await fetch('https://rickandmortyapi.com/api/character')
   const characterApi =await Api.json ();
   

   setCharacters(characterApi.results)
   
  
   
  };


 
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morthy</h1>
        {characters ? (
          <Characters characters ={characters} setCharacters ={setCharacters}/>

        ):(<>
        <img src={imageRickMorthy} alt="Rick & Morthy" className="img-home" />
          <button  onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>  
          )}
        
        
      </header>
    </div>
  );
}

export default App;
