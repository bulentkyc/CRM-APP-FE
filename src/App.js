import React from 'react';
import './App.css';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Switch>
      //Way-1 to create a route
      <Route path='/signin'>
        <Signin/>
      </Route>

      //Way-2 to create a route
      <Route path='/signup' component={Signup}/>
      //Way-1 or Way-1 have same kinf of result

      <Route path='/' component={Signin}/>
    </Switch>
      
    </div>
  );
}

export default App;
