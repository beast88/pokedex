import React from 'react'

import '../Styles/Header.css'

const Header = () => {
	return(
		<header className="header">
			<h1>PokeDex</h1>
			<a href="https://github.com/beast88/pokedex"
				target="_blank" 
				rel="noreferrer"
			>
				<i className="fa fa-github" aria-hidden="true"></i>
			</a>
		</header>
	)
}

export default Header