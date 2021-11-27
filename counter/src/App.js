import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    }
  }

  onClickDown = () => {
    this.setState((prevState) => {
      if (prevState.counter > 0) {
        return {
          counter: prevState.counter - 1,
        }
      }
    })
  };

  onClickReset = () => {
    this.setState(() => {
      return {
        counter: 0,
      }
    })
  };

  onClickUp = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      }
    })
  };

  render() {
    return (
      <div className={this.state.counter % 2 === 0 ? 'green-wrap' : 'red-wrap'}>
        <div className="counter">{this.state.counter}</div>
        <div className="parity">{this.state.counter % 2 === 0 ? 'Введено чётное число' : 'Введено нечётное число'}</div>
        <button onClick={this.onClickDown} className="btn">-</button>
        <button onClick={this.onClickReset} className="btn">Reset</button>
        <button onClick={this.onClickUp} className="btn">+</button>
      </div>
    )
  }
}

export default App;