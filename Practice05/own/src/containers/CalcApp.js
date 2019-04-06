import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_number : " ",
      operator : "nothing",
      pending : 0,
      buffer : 0
    };
  }

  resetState = () => this.setState(() => ({show_number : " ", operator : "nothing", pending : 0, buffer : 0}))

  handleNumber(num){
    
    if(this.state.operator !== "nothing"){
      if(this.state.operator === "plus"){
        this.setState(state =>({show_number:num, pending: state.pending+num, buffer: num}))
      }
      else if(this.state.operator === "minus"){
        this.setState(state =>({show_number:num, pending: state.pending-num, buffer: num}))
      }
      else if(this.state.operator === "multiple"){
        this.setState(state =>({show_number:num, pending: state.pending*num, buffer: num}))
      }
      else{
        this.setState(state =>({show_number:num, pending: state.pending/num, buffer: num}))
      }
    }
    else{
      if(this.state.show_number === " "){
        this.setState({show_number : num, pending : num});
      }
      else{
        this.setState(state => ({ show_number: state.show_number*10 + num, pending: state.show_number*10 + num}));
      }
      
    }
  }
  
  handleOperator(oper){
      this.setState(state => ({show_number:state.pending, operator:oper}));
  } 
  handleEqual(){
    if(this.state.show_number === this.state.pending && this.state.operator !== "nothing"){
      if(this.state.operator === "plus"){
        this.setState(state =>({show_number: state.show_number+state.buffer, pending: state.show_number+state.buffer}))
      }
      else if(this.state.operator === "minus"){
        this.setState(state =>({show_number: state.show_number-state.buffer, pending: state.show_number-state.buffer}))
      }
      else if(this.state.operator === "multiple"){
        this.setState(state =>({show_number: state.show_number*state.buffer, pending: state.show_number*state.buffer}))
      }
      else{
        this.setState(state =>({show_number: state.show_number/state.buffer, pending: state.show_number/state.buffer}))
      }
    }
    else{
      this.setState(state =>({show_number:state.pending}));
    }
  }
    // TODO
  

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  

  

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.show_number}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.handleOperator("divide")}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.handleNumber(7)} children={7} >7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.handleNumber(8)} children={8}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.handleNumber(9)} children={9}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.handleOperator("multiple")}>X</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.handleNumber(4)} children={4}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.handleNumber(5)} children={5}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.handleNumber(6)} children={6}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.handleOperator("minus")}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.handleNumber(1)} children={1}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.handleNumber(2)} children={2}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.handleNumber(3)} children={3}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.handleOperator("plus")}>+</CalcButton>
            <div className="calc-row">
            <CalcButton className="bigger-btn" onClick={() => this.handleNumber(0)} children={0}>0</CalcButton>
            <CalcButton className="calc-number" onClick={this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.handleEqual()}>=</CalcButton>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
