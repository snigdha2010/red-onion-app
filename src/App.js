import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Food from './components/Food/Food';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menus from './components/Breakfast/Breakfast';

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Banner></Banner> */}
      <Food></Food>

      {/* <Router>
        <Switch>
            <Route path = '/breakfast'>
           
            </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
