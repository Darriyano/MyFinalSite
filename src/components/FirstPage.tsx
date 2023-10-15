import React from 'react';
import './firstpagestyle.css';
import FirstPhoto from "./FirstPhoto";
import Menu from "./menu";


const FirstPage= () => {
return (
    <div className="main-page" id="first-page">
        <Menu/>
        <FirstPhoto/>
    </div>);
}

export default FirstPage;