import React, { useState, useEffect } from 'react'

const Picture = (props) => {
	const front = props.images.front_default
	const back = props.images.back_default

	const [pic, setPic] = useState(front)

	useEffect(() => {
		setPic(front)
	}, [])

	const handleClick = () => {
		pic === front ? setPic(back) : setPic(front)
	}

	console.log(props.types)

	return(
		<div className="picture-container">
			<img src={pic} alt="sprite" />
			<button onClick={handleClick} >Switch</button>

			<div className="type-container">
			</div>
		</div>
	)
}

export default Picture