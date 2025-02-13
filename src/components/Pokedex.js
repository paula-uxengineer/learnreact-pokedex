import React from 'react'
import PokedexScreen from './PokedexScreen'
import PokemonForm from './PokemonForm'
import { useState, useEffect } from 'react'
import '../styles/pokedex.css'


function Pokedex(){
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState(null)
    const RandomId = Math.floor(Math.random() * 806 + 1)
    // Inicamos con ID random para siempre tener un pokemón
    const [ pokemonID, setPokemonId ] = useState(RandomId)
  
    // Solamente esta cargando mientras hacemos la petición,
    // cuando esta se resuelve o fue un éxito u un error.
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
          .then(res => res.json())
          .then(data => {
            setPokemon(data)
            setLoading(false)
            setError(false)
          })
          .catch(err => {
            setLoading(false)
            setError(true)
          })
      }, [pokemonID])

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
            <div className={`light is-sky is-big ${loading && 'is-animated'}`}  />
            <div className="light is-red" />
            <div className="light is-yellow" />
            <div className="light is-green" />
        </div>

        <div className="pokedex-screen-container">
            <PokedexScreen
                pokemon={pokemon}
                loading={loading}
                error={error}
            />
        </div>

        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
         </div>
          <PokemonForm
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
            />
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
    
  )
}

export default Pokedex
