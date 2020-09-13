import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AddAppointment from './components/AddAppointment';
import ListAppointment from './components/ListAppointment';
import MyNavigationBar from './components/MyNavigationBar';
import Container from '@material-ui/core/Container';

import './App.css';

class App extends Component {
  render() {
    return (
		<Router>
	    <MyNavigationBar/>
	    	<Container>
				<Switch>
					<Route path = "/add" exact component = {AddAppointment}/>
					<Route path = "/" exact component = {ListAppointment}/>
				</Switch>	    			
	    	</Container>
	    </Router>
      
    );
  }
}

export default App;