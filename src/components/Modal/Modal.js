import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const modal = ({ show, closed }) => {
   
    const animationTiming = {
        enter: 400,
        exit: 1000
    };
    
    return (
        <CSSTransition 
            in={show} 
            timeout={animationTiming} 
            mountOnEnter 
            unmountOnExit
            classNames="slide" 
            // classNames={{
            //     enterActive: 'ModalOpen',
            //     exitActive: 'ModalClosed'
            // }}
            >
                
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={closed}>Dismiss</button>
            </div>
                
        </CSSTransition>
    )
};

export default modal;