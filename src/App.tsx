import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Menu from "./components/menu";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/thirdPage";


function App() {
  return (
      <div>
        <Menu/>
    <FirstPage/>
       <SecondPage/>
          <ThirdPage/>
      </div>
  );
}

export default App;
