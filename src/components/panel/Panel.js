import React from 'react'
import PropTypes from 'prop-types';
import "./Panel.css";

export class Panel extends React.Component {
	render() {
        return (<div className="panel">
                    
                    {this.props.children}
                    

                </div>
                )
	}
}

Panel.propTypes = {
    title: PropTypes.string.isRequired
};