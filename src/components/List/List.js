import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './List.css';

class List extends Component {
    state = {
        items: [[1, Math.random()], [2, Math.random()], [3, Math.random()]]
    }

    addItemHandler = () => {
        this.setState(state => {
            return { items: [...state.items, [state.items.length + 1, Math.random()]] }
        });
    }

    removeItemHandler = (key) => {
        this.setState(state => {
            return { items: state.items.filter(item => item[1] !== key) }
        });
    }

    render() {
        const listItems = this.state.items.map(([value, key]) => (
            <CSSTransition  timeout={400} key={key} classNames="LI">
            <li                 
                className="ListItem" 
                onClick={() => this.removeItemHandler(key)}>{value}</li>
            </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;