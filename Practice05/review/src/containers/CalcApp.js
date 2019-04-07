import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.setcalc = this.setcalc.bind(this);
    this.setnum = this.setnum.bind(this);
    this.sumup = this.sumup.bind(this);
    this.state = {
      display : "0" ,
      operator : 1,
      number : 0,
      sum : 0,
      lastenter : 0,
      addclass : 0
    };
  }

  resetState = () =>{
    this.setState({display : "0",
                   number : 0 ,
                   operator : 1,
                   lastenter : 0,
                   sum:0,
                   addclass:0});
  };

  setcalc(val){
    if(this.state.lastenter === 1)
      this.sumup();
    
    this.setState({operator : val, lastenter:2});
    console.log(this.state);
    this.checkfont(this.state.display);
  }

  setnum(val){
    if(this.state.lastenter === 0){
      this.setState(
        {number : val,
         sum:0,
         display : val});
    }
    else if(this.state.number === 0){
      this.setState(
        {number : val,
         display : val});
    }
    else{
      this.setState(
        {number : val + this.state.number*10,
         display : this.state.display + String(val)});
    }
    console.log(this.state);
    this.setState({lastenter : 1});
    this.checkfont(this.state.display);
  }

  sumup(){
    let temp =0;
    console.log("hi");
    this.setState({lastenter : 0});
    if(this.state.operator === 1){
      const temp = this.state.sum + this.state.number;
      this.setState(
        {sum : temp,
         number : 0,
         display : String(temp),
         operator : 1});
    }
    else if(this.state.operator === 2){
      temp = this.state.sum - this.state.number;
      this.setState(
        {sum : temp,
         number: 0,
         display : String(temp),
         operator : 1});
    }
    else if(this.state.operator === 3){
      temp = this.state.sum * this.state.number;
      this.setState(
        {sum : temp,
         number : 0,
         display : String(temp),
         operator : 1});
    }
    else if(this.state.operator === 4){
      temp = this.state.sum / this.state.number;
      this.setState(
        {sum : temp,
         display : String(temp),
         number : 0,
         operator : 1});
    }
    this.checkfont(temp);
    console.log(this.state);
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  };

  checkfont(temp){
    if(String(temp).length > 7){
        this.setState({addclass:true});
        console.log("tes");
    }
    else
        this.setState({addclass:false})
  }

  render() {
    let boxClass = ["calc-display"];
    if(this.state.addclass){
      boxClass.push('calc-smallfont');
    }
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className={boxClass.join(' ')}>{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.setcalc(4)}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="7" onClick ={ () =>　this.setnum(7)}></CalcButton>
            <CalcButton className="calc-number" children="8" onClick ={() =>　this.setnum(8)}></CalcButton>
            <CalcButton className="calc-number" children="9" onClick ={() =>　this.setnum(9)}></CalcButton>
            <CalcButton className="calc-operator" children="x" onClick={() => this.setcalc(3)}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="4" onClick ={() =>　this.setnum(4)}></CalcButton>
            <CalcButton className="calc-number" children="5" onClick ={() =>　this.setnum(5)}></CalcButton>
            <CalcButton className="calc-number" children="6" onClick ={() =>　this.setnum(6)}></CalcButton>
            <CalcButton className="calc-operator" children="-" onClick={() => this.setcalc(2)}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="1" onClick ={() =>　this.setnum(1)}></CalcButton>
            <CalcButton className="calc-number" children="2" onClick ={() =>　this.setnum(2)}></CalcButton>
            <CalcButton className="calc-number" children="3" onClick ={() =>　this.setnum(3)}></CalcButton>
            <CalcButton className="calc-operator" children="+" onClick={() => this.setcalc(1)}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" children="0" onClick={() =>　this.setnum(0)}></CalcButton>
            <CalcButton className="calc-number" children="." onClick={this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick = {this.sumup}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
