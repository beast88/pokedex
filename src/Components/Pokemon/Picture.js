import React from 'react'

const Picture = (props) => {
	console.log(props.images)
	
	const front = props.images.front_default

	return(
		<div className="picture-container">
			<img src={front} alt="sprite" />
		</div>
	)
}

export default Picture