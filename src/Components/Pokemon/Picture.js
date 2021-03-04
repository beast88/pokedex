import React, { useState, useEffect } from 'react'
import types from '../../Assets/types'

const Picture = (props) => {
	const front = props.images.front_default
	const back = props.images.back_default
	const height = props.height / 10
	const weight = props.weight / 10

	const [pic, setPic] = useState(front)

	useEffect(() => {
		setPic(front)
	}, [])

	const handleClick = () => {
		pic === front ? setPic(back) : setPic(front)
	}

	return(
		<div className="picture-container">

			<img src={pic} alt="Sprite Unavailable" />
			<button onClick={handleClick} >Switch</button>

			<div className="type-container">
				{
					props.types.map(type => {
						const image = types.find(x => x.name === type.type.name)
						return <img src={image.image} alt={image.name} key={image.name} />
					})
				}
			</div>

			<div className="metrics-container">
				<div className="height">
					<p>Height:</p>
					<p>{height} m</p>
				</div>

				<div className="weight">
					<p>Weight:</p>
					<p>{weight} kg</p>
				</div>
			</div>
		</div>
	)
}

export default Picture