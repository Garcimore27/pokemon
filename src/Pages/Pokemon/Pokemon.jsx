import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
// import {useQuery} from 'react-query';

function Pokemon() {
  const { pokemonId } = useParams()
    // const query = useQuery();
    // const choixPokemon = JSON.parse(query.get("choixPokemon"));
    // console.log(choixPokemon);

  const addr2 = "https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId.toString() ;

  const style1 = {margin: '1rem'}; //espacement entre les cartes
  const style2 = {color: 'white'}; //couleur du texte
  const style3 = {backgroundColor: 'black'}; //couleur du fond des cartes
  const style4 = {listStyleType: 'none'}; //enleve les puces de la liste
  const style5 = {width: '12rem'}; //taille des images des pokemons
  const style6 = {width: '6rem'}; //taille des images des apiTypes
  const style7 = {fontSize: '1rem'}; //taille du texte des stats

  const[poke, setPoke] = useState({
    apiTypes: [],
    stats: {}
  }); //on initialise le state de la variable pokemons avec un objet vide

  useEffect(() => { //fonction qui s'execute au chargement de la page
    fetch(addr2)
    .then(res=>res.json())
    .then(data=>{setPoke(data)});
  }, []); //{} = si on met rien, il va s'executer a chaque fois qu'on change de state, si on met un tableau vide, il va s'executer qu'une seule fois au chargement de la page

  return (
    <div className="App">
        <header className="App-header">
            <div class="row" style={{...style3}} >
                <div class="col">
                    <div class="card" style={{...style1, ...style2, ...style3}} key= {poke.id}>
                    <div class="img-container" justify-content= "center">  
                        <img src={poke.image} class="card-img-top" alt="..." style={{...style5}}></img>
                    </div>
                        <div class="card-body">
                            
                            <h3 class="card-title" style={{...style2}}>{poke.name}</h3>
                            <p style={{...style2}}>------------</p>
                            <p style={{...style7}}>Génération : {poke.apiGeneration}</p>
                            <p style={{...style7}}>Slug : {poke.slug}</p>
                            <p style={{...style7}}>Pokedex ID : {poke.pokedexId}</p>
                            <div>
                                <button class="btn btn-primary"><Link to="/" style={{...style2, ...style4, ...style7}}>Retour</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="points" style={{...style3}} key= {poke.id}>
                    <p> </p>
                    {poke.apiTypes.map((apt) => (
                    <div>
                        <li style={{...style2, ...style4}}>{apt.name}</li>
                        <img src={apt.image} className="App-TypeImages" alt="pokemon" style={{...style6}}/>
                    </div>
                    )
                    )} 
                    <p style={{...style2}}>-------------------</p>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{"width": `${poke.stats.HP}%`}} aria-valuenow={poke.stats.HP} aria-valuemin="0" aria-valuemax="100">HP: {poke.stats.HP}</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{"width": `${poke.stats.attack}%`}} aria-valuenow={poke.stats.attack} aria-valuemin="0" aria-valuemax="100">Attack: {poke.stats.attack}</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{"width": `${poke.stats.defense}%`}} aria-valuenow={poke.stats.defense} aria-valuemin="0" aria-valuemax="100">Defense: {poke.stats.defense}</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{"width": `${poke.stats.special_attack}%`}} aria-valuenow={poke.stats.special_attack} aria-valuemin="0" aria-valuemax="100">Special Attack: {poke.stats.special_attack}</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{"width": `${poke.stats.special_defense}%`}} aria-valuenow={poke.stats.special_defense} aria-valuemin="0" aria-valuemax="100">Special Defense: {poke.stats.special_defense}</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" style={{"width": `${poke.stats.speed}%`}} aria-valuenow={poke.stats.speed} aria-valuemin="0" aria-valuemax="100">Speed: {poke.stats.speed}</div>
                    </div>
                    </div>
                </div>
            </div>
        </header>    
    </div>

  );
}
export default Pokemon;