import React from 'react'
import Picture from './Pokemon/Picture'
import Stats from './Pokemon/Stats'

import '../Styles/Display.css'

const Display = (props) => {
	//Console log here... remember to take it out
	console.log(props.info)

	const name = props.info.name.toUpperCase()

	return(
		<div className="main-display" >
			<h2>{props.info.id}: {name}</h2>
			<Stats
				stats={props.info.stats} 
			/>

			<Picture 
				images={props.info.sprites}
				types={props.info.types}
				weight={props.info.weight}
				height={props.info.height}
			/>
		</div>
	)
}

export default Display