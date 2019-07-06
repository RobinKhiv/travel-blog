import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/header/header'
import HomePage from './Routes/HomePage'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Switch>
          <Route exact path={'/'} component  ={HomePage}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
