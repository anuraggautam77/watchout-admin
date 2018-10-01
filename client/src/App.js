import React, {PropTypes, Component} from 'react';
import { withRouter } from "react-router-dom";
 
import './style/css/application.scss';
 


import Routing from './router/router';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        //  <QRCode value="https://anuraggautam77.github.io "/>  
    }
    render() {
        return (<Routing/>);
    }
}

export default withRouter(App);
