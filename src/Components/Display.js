import React from 'react'
import Picture from './Pokemon/Picture'
import Stats from './Pokemon/Stats'

import '../Styles/Display.css'

const Display = (props) => {
	console.log(props.info)

	const name = props.info.name.toUpperCase()

	return(
		<div className="main-display" >
			<h2>{props.info.id}: {name}</h2>
			<Stats />

			<Picture 
				images={props.info.sprites}
				types={props.info.types}
			/>
		</div>
	)
}

export default Display