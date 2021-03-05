import React from 'react'

const APIError = (props) => {
	const hidden = props.error ? "error-container" : "error-container hidden"

	return(
		<div className={hidden}>
			<h2>Invalid Name/ID</h2>
		</div>
	)
}

export default APIError