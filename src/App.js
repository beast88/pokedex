import React, { useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Loading from './Components/Loading'
import APIError from './Components/Error'
import Background from './Components/Background'
import Footer from './Components/Footer'
import Display from './Components/Display'

import './Styles/App.css'

function App() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setPokemon(null)
    setError(false)
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setInput('')
        setLoading(false)
      })
      .catch(error => {
        setInput('')
        setLoading(false)
        setError(true)
        console.log('Something went wrong')
      })
  }

  return (
   <div>
    <Header />
    <Search handleSubmit={handleSubmit}
      handleChange={handleChange}
      input={input}
    />
    <div className="main-container">
      // <Background />
      <Loading isLoading={loading} />
      <APIError error={error} />

      {pokemon === null ? '' : <Display info={pokemon} />}

    </div>
    <Footer />
   </div> 
  )
}

export default App;
