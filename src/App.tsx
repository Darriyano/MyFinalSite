import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Menu from "./components/menu";
import SecondPage from "./components/SecondPage";


function App() {
  return (
      <div>
        <Menu/>
    <FirstPage/>
       <SecondPage/>
      </div>
  );
}

export default App;
