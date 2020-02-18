import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends component() {
  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill("X")
    }
  }
  render(){
 const Box : this.state.board.map(box=> <div className="box">{box}</div>)
  return (
    <div className="container">
    <h1> Tic Tac Toe App </h1>
    <div className="board">
     {Box}
     </div>
    </div>
  );
}
}
export default App;
