import React from 'react';
import './firstpagestyle.css';
import Myphoto from '';

const FirstPhoto = () => {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={Myphoto} className="photo_main" alt="My photo"></img>
        </div>
    );
};

export default FirstPhoto;