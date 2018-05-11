import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import anime from 'animejs'

class Typer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ['programming', 'testing', 'automating', 'designing'],
      m_index: 0,
      m_faded: false,
      pulser: ''
    };
  }

  componentDidMount() {

    var cssSelector = anime({
        targets: '#slideSource',
        opacity: 1
    });

    this.timerID = setInterval(
        () => this.pulse(),
        2400
    );
    //this.setState({pulser: pulser});
  }

  pulse(){
    console.log("BEKFAST");
    this.flipText();
  }
    

  // upon leaving, stop timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  flipText (){
    var t = (this.state.m_index < this.state.messages.length - 1) ? this.setState({m_index: this.state.m_index+1}) : this.setState({m_index: 0});
  }
  
 


  render() {return (<a id="slideSource" style={{color: '#00ccff'}}>{this.state.messages[this.state.m_index]}</a>);}   
  }
  
  export default Typer;


  