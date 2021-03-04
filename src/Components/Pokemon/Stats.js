import React from 'react'

const Stats = (props) => {
	const hp = props.stats[0].base_stat
	const attack = props.stats[1].base_stat
	const defense = props.stats[2].base_stat
	const specAtt = props.stats[3].base_stat
	const specDef = props.stats[4].base_stat
	const speed = props.stats[5].base_stat

	return(
		<div className="stats-container">
			<h3>Base Stats</h3>
			<div className="stats-grid">
				<p>HP:</p>
				<p>{hp}</p>
				<p>ATTACK:</p>
				<p>{attack}</p>
				<p>DEFENSE:</p>
				<p>{defense}</p>
				<p>SPECIAL ATTACK:</p>
				<p>{specAtt}</p>
				<p>SPECIAL DEFENSE:</p>
				<p>{specDef}</p>
				<p>SPEED:</p>
				<p>{speed}</p>
			</div>
		</div>
	)
}

export default Stats