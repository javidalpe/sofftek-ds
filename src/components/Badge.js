import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export class Badge extends React.Component {
    render() {
        return <p class="ui tag label">{this.props.text}</p>
    }
}

Badge.propTypes = {
	message: PropTypes.string.isRequired
};