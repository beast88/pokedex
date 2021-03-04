import React, { useState, useEffect } from 'react'
import types from '../../Assets/types'

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

	return(
		<div className="picture-container">
			<img src={pic} alt="sprite" />
			<button onClick={handleClick} >Switch</button>

			<div className="type-container">
				{
					props.types.map(type => {
						console.log(type.type.name)
						const image = types.find(x => x.name === type.type.name)
						return <img src={image.image} alt={image.name}/>
					})
				}
			</div>
		</div>
	)
}

export default Picture