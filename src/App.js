import React, { useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Background from './Components/Background'
import Footer from './Components/Footer'
import Display from './Components/Display'

import './Styles/App.css'

function App() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [hidden, setHidden] = useState(true)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setHidden(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setInput('')
        setLoading(false)
        setHidden(false)
      })
      .catch(error => {
        setInput('')
        setLoading(false)
        setHidden(true)
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
      <Background />
      <Display info={pokemon} hidden={hidden} />      
    </div>
    <Footer />
   </div> 
  )
}

export default App;
