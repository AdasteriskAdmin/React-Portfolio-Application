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
      m_faded: false
    };
  }

  componentDidMount() {

    var cssSelector = anime({
        targets: '#slideSource',
        opacity: 1
    });

    var pulserText = this.pulser();
  }

  // upon leaving, stop timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  pulser(){
      setInterval(this.fadeToggle(), 1000);
  }
 
  fadeToggle(){
    if(this.m_faded){
        return anime({
            targets: '#slideSource',
            opacity: 1,
            delay: 1000,
            complete: function(anim) {
                
            }
        });
    } else {
        return anime({
            targets: '#slideSource',
            opacity: 0,
            delay: 1000,
            complete: function(anim) {
                
            }
        });

    }
  }
  
 


  render() {


      

      return (

            <div id="slideSource">{this.state.messages[this.state.m_index]}</div>

        

        );
      }
      
  }
  
  export default Typer;


  