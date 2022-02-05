import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount(){
        console.log("A");
    }
    componentWillUnmount(){
        console.log("B");
    }

    handleIncreament = (event) =>{
        this.props.onIncreament(this.props.habit);
    }
    handleDecreament = (event) =>{
        this.props.onDecreament(this.props.habit);
    }
    handleDelete = (event) =>{
        this.props.onDelete(this.props.habit);
    }
    render() {
        //props에있는 동일한 naming 변수
        const {name, count} = this.props.habit;
        return(
            <li className='habit'>
                <span className ="habit-name">{name}</span>
                <span className ="habit-count">{count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncreament}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecreament}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className='habit-button habit-delete' onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;