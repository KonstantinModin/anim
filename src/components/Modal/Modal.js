import React from 'react';

import './Modal.css';

const modal = ({ show, closed }) => {
    const modaClasses = ['Modal', show ? 'ModalOpen' : 'ModalClosed'];
    
    return (
        <div className={modaClasses.join` `}>
            <h1>A Modal</h1>
            <button className="Button" onClick={closed}>Dismiss</button>
        </div>
    )
};

export default modal;