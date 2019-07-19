import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from 'react-transition-group';

class App extends Component {
    state = {
        modalIsOpen: false,
        showBlock: false
    }

    handleModal = (value) => {
        this.setState({modalIsOpen: value});
    }

    boxHandler = () => {
        this.setState(state => ({showBlock: !state.showBlock}));
    }


    render() {
        const { modalIsOpen, showBlock } = this.state;
        
        
        return (
            <div className="App">
                <button className="Button" onClick={this.boxHandler}>Toggle</button>
                {/* {showBlock ? <div className="Box"></div> : null} */}
                <Transition 
                    in={showBlock} 
                    timeout={1000} 
                    mountOnEnter 
                    unmountOnExit
                    onEnter={() => console.log('onEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}
                    >
                    {state => (
                        <div style={{
                            backgroundColor: 'red',
                            width: 100,
                            height: 100,
                            margin: 'auto',
                            transition: 'opacity 0.3s ease-out',
                            opacity: state === 'exiting' ? 0 : 1
                        }}/>
                    )}                    
                </Transition>
                <hr/>
                <h1>React Animations</h1>
                <Modal show={modalIsOpen} closed={() => this.handleModal(false)} />                
                <Backdrop show={modalIsOpen}/>
                <button className="Button" onClick={() => this.handleModal(true)}>Open Modal</button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
