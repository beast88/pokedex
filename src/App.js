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

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data)
        setInput('')
        setLoading(false)
      })
      .catch(error => {
        setInput('')
        setLoading(false)
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
      <Display info={pokemon}/>      
    </div>
    <Footer />
   </div> 
  )
}

export default App;
