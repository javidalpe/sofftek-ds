import React from 'react'
import PropTypes from 'prop-types';

export class Avatar extends React.Component {
	render() {
		return <img alt={this.props.alt} src={this.props.source} />
	}
}

Avatar.propTypes = {
	source: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};
