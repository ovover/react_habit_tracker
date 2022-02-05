import { Component } from 'react/cjs/react.development';
import './app.css';
import AddHabit from './components/addHabit';
import Habits from './components/habits';
import Nav from './components/nav';

class App extends Component {

  state = {
    habits : [
        { id : 1, name : 'Reading' , count : 0},
        { id : 2, name : 'Running' , count : 0},
        { id : 3, name : 'Coding' , count : 0},
    ],
    // total : 0 
  }

  handleIncreament = (habit) =>{
    //State를 직접 수정하는것은 좋지 않다.
    // const habits = [...this.state.habits]; // ...은 배열복사
    // const index = habits.indexOf(habit);
    // habits[index].count ++ ;

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id){
        return {...habit, count : habit.count + 1};
      }
      return item;
    });
    this.setState({habits});

    // const totalCount = this.state.total + 1;
    // this.setState({total : totalCount});
  }
  handleDecreament = (habit) =>{
    // const habits = [...this.state.habits]; 
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count : count < 0 ? 0 : count};
      }
      return item;
    });
    this.setState({habits});
    
    // const total = count < 0 ? this.state.total : this.state.total - 1;
    // this.setState({total});
  }
  handleDelete = (habit) =>{
    const habits = this.state.habits.filter(item => item.id !== habit.id); 
    this.setState({habits});
  }

  handleAdd = (name) =>{
    const habits = [...this.state.habits, {id : Date.now() , name:name, count:0}];
    this.setState({habits});
  }

  handleReset = () =>{
    // const habits = [...this.state.habits];
    // habits.map(habit => (
    //   habit.count = 0
    // ))
    const habits = this.state.habits.map(habit => {
      // habit.count = 0;
      // return habit;
      if(habit.count !== 0 ){
        return {...habit , count : 0};
      }
      return habit;
    })


    this.setState({habits});
    // this.setState({total : 0});
  }

  render() {
    return (
      <>
        <Nav total = {this.state.habits.filter(item => item.count > 0).length}/>
        <Habits habit={this.state.habits} 
                onIncreament = {this.handleIncreament}
                onDecreament = {this.handleDecreament}
                onDelete = {this.handleDelete}
                onAdd = {this.handleAdd}
                onReset = {this.handleReset}
        />
    
      </>
    );
  }
}

export default App;
