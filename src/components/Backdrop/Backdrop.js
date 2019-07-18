import React from 'react';
import './Backdrop.css';

const backdrop = ({ show }) => {
    const backdropClasses = ['Backdrop', show ? 'BackdropOpen' : 'BackdropClosed'];
    return (
        <div className={backdropClasses.join` `}></div>
    );
};

export default backdrop;