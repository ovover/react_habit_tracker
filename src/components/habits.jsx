import React, { Component } from 'react';
import AddHabit from './addHabit';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <>
                <AddHabit onAdd = {this.props.onAdd}/>
                <ul>
                {
                    this.props.habit.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncreament = {this.props.onIncreament}
                            onDecreament = {this.props.onDecreament}
                            onDelete = {this.props.onDelete}
                        />
                    ))            
                } 
                </ul>
                <button onClick={this.props.onReset}>reset</button>
            </>
        ) ;
    }
}
export default Habits;