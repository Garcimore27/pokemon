
import './home.css';
import { useState, useEffect } from 'react';

function Home() {

  const addr = "https://pokebuildapi.fr/api/v1/pokemon/limit/151";

  const style1 = {margin: '1rem'}; //espacement entre les cartes
  const style2 = {color: 'white'}; //couleur du texte
  const style3 = {backgroundColor: 'black'}; //couleur du fond des cartes
  const style4 = {listStyleType: 'none'}; //enleve les puces de la liste
  const style5 = {width: '12rem'}; //taille des images des pokemons
  const style6 = {width: '6rem'}; //taille des images des apiTypes
  const style7 = {fontSize: '1rem'}; //taille du texte des stats

  const[pokemons, setPokemons] = useState([]); //on initialise le state de la variable pokemons avec un tableau vide

  useEffect(() => { //fonction qui s'execute au chargement de la page
    fetch(addr)
    .then(res=>res.json())
    .then(data=>{setPokemons(data)});
  }, []); //[] = tableau de dependances, si on met rien, il va s'executer a chaque fois qu'on change de state, si on met un tableau vide, il va s'executer qu'une seule fois au chargement de la page

  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
   
        {pokemons.map((pokemon) => ( //on met des parentheses pour retourner du html
          <div class="col-2">
          <div class="card" style={{...style1, ...style2, ...style3}} key= {pokemon.id}>
            <img src={pokemon.image} class="card-img-top" alt="..." style={{...style5}}></img>
            <div class="card-body">
              <h3 class="card-title" style={{...style2}}>{pokemon.name}</h3>
              <p style={{...style2}}>---------------</p>
              {pokemon.apiTypes.map((apiType) => (
                <div>
                  <li style={{...style2, ...style4}}>{apiType.name}</li>
                  <img src={apiType.image} className="App-TypeImages" alt="image pokemon" style={{...style6}}/>
                </div>
              )
              )}
              <p style={{...style2}}>---------------</p>
              <li style={{...style2, ...style4, ...style7}}>HP: {pokemon.stats.HP}</li>
              <li style={{...style2, ...style4, ...style7}}>Attack: {pokemon.stats.attack}</li>
              <li style={{...style2, ...style4, ...style7}}>Defense: {pokemon.stats.defense}</li>
              <li style={{...style2, ...style4, ...style7}}>Special Attack: {pokemon.stats.special_attack}</li>
              <li style={{...style2, ...style4, ...style7}}>Special Defense: {pokemon.stats.special_defense}</li>
              <li style={{...style2, ...style4, ...style7}}>Speed: {pokemon.stats.speed}</li>

          </div>
          </div>
          </div> 
        )
        )}
        </div>
      </header>
    </div>
  );
}

export default Home;
