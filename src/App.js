import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Panel} from "./components/panel/Panel";
import {Avatar} from "./components/Avatar/Avatar";
import {Badge} from "./components/Badge";
import {ProgressBar} from "./components/progress-bar/progress-bar";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div style={{padding: 300}}>
        <Panel>
            <div>
                <Avatar source="https://avatars1.githubusercontent.com/u/5345952?s=460&v=4" alt={"Javier"}/>
            </div>
            <h1>Javier Vidal Peña</h1>
            <Badge text="react"/>
	        <Badge text="js"/>
	        <Badge text="es6"/>
	        <Badge text="phpstorm"/>
	        <hr/>
            Nivel de ingles:
            <ProgressBar porcentage={50}/>
	        <hr/>
            Contacta conmigo:
            <Button label="Github"/> <Button label="Twitter" type="secondary"/>
        </Panel>
      </div>
    );
  }
}

export default App;
