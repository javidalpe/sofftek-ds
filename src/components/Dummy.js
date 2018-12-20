import React from 'react'
import PropTypes from 'prop-types';

export class Dummy extends React.Component {
	render() {
		return <div>{this.props.message}</div>;
	}
}

Dummy.propTypes = {
	message: PropTypes.string.isRequired
};
