import React from 'react';
import PropTypes from 'prop-types';
import './progressBar.css';

export class ProgressBar extends React.Component {

    render(){

        const porcentage = this.props.porcentage + '%';
        const porcentageWidth = { width: porcentage };
        const porcentageNumber = this.props.porcentageNumber ? porcentage : null;

        return(
            <div className="progress-bar">
                <div className="progress-bar__number">{porcentageNumber}</div>
                <div className="progress-bar__line" style={porcentageWidth}></div>
            </div>
        )
    }
}

ProgressBar.propTypes = {
	porcentage: PropTypes.number.isRequired,
	porcentageNumber: PropTypes.bool
};

