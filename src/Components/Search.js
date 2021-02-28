import React from 'react'

import '../Styles/Search.css'

const Search = (props) => {
	return(
		<div className="search-container">
	      <form onSubmit={props.handleSubmit}>
	        <label>Search by name or ID (1 - 893):</label>
	        <input
	          placeholder="Enter here..."
	          value={props.input}
	          name="input"
	          onChange={props.handleChange}
	        />        
	      </form>
	    </div>
	)
}

export default Search