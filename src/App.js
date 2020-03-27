import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Food from './components/Food/Food';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuDetail from './components/MenuDetail/MenuDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner> 
    

      <Router>
        <Switch>
        <Route exact path='/'>
          <Food></Food>
        </Route>
        <Route path='/food'>
          <Food></Food>
        </Route>
        <Route path='/product/:productKey'>
          <MenuDetail></MenuDetail>
        </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
