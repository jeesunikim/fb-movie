import React from 'react';

class ListFetchMovies extends React.Component {
	constructor () {
		super();
	};

	render () {

		const { details } = this.props;

		return (
			<li onClick={(evt) => this.props.updateMovie({details})}>
				{details.Title}  {details.Year}
			</li>
		)
	}

};

export default ListFetchMovies;