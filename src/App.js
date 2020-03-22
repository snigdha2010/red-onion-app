import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Menus from './components/Menus/Menus';
import Food from './components/Food/Food';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Food></Food>
    </div>
  );
}

export default App;
