import React from 'react'
import PropTypes from 'prop-types';

import './Alert.css';

export class Alert extends React.Component  {
	render() {
		let class_name = 'alert ' + this.props.type;
		return <div className={class_name}>{this.props.message}</div>;
	}
}

Alert.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['success', 'danger', 'warning']).isOptional
};

Alert.defaultProps = {
  type: 'success'
};
