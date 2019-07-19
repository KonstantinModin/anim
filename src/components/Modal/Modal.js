import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const modal = ({ show, closed }) => {
   
    const animationTiming = {
        enter: 400,
        exit: 1000
    };
    
    return (
        <Transition 
            in={show} 
            timeout={animationTiming} 
            mountOnEnter 
            unmountOnExit >
                {state => (
                    <div className={['Modal', state === 'entering' ? 'ModalOpen' :
                                              state === 'exiting'  ? 'ModalClosed' : null].join` `}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={closed}>Dismiss</button>
                    </div>
                )}
        </Transition>
    )
};

export default modal;