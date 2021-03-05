import React from 'react'

import '../Styles/Loading.css'

const Loading = (props) => {
	const hidden = props.isLoading ? "loading-container" : "loading-container hidden"

	return(
		<div className={hidden}>
			<h2>Loading...</h2>
		</div>
	)
}

export default Loading