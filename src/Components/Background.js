import React from 'react'
import pokeball1 from '../Assets/Background/pokeball-1.png'
import pokeball2 from '../Assets/Background/pokeball-3.png'

import '../Styles/Background.css'

const Background = () => {
	return(
		<div className="background">
			<div className="row">
				<div>
					<img src={pokeball1} alt="" />
					<img src={pokeball2} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Background