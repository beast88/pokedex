import React from 'react'
import Picture from './Pokemon/Picture'
import Stats from './Pokemon/Stats'

import '../Styles/Display.css'

const Display = (props) => {
	// console.log(props.info)

	const name = props.info.name != null ? props.info.name.toUpperCase() : ''

	const hidden = props.hidden === true ? 'main-display hidden' : 'main-display'

	return(
		<div className={hidden} >
			<h2>{name}</h2>
			<Stats />
			<Picture images={props.info.sprites}/>
		</div>
	)
}

export default Display