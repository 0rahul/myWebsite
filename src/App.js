import React from 'react';
import './index.css';
import NavBar from './Navbar';
import {Switch,Route} from 'react-router-dom';
import Resume from './Resume';
import Project from './Projects.jsx';


const App=()=>{
  return(
    <>
    <Switch>
    <Route exact path="/">
    <NavBar/>
    </Route>
    <Route exact path="/Resume">
      <Resume/>
    </Route>
    </Switch>
    </>
  );
}
export default App;