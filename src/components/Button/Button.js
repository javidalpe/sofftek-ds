import React, { Component } from 'react';
import "./Button.css";
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <div className={"Button " + ((this.props.type !== undefined) ? this.props.type : "")}>
          <p>{this.props.label}</p>
      </div>
    );
  }
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string
};


export default Button;
