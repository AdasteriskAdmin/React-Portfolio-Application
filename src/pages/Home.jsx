import React, { Component } from 'react';
import {Button, Container, Row, Col } from 'reactstrap';
import Typer from '../components/Typer';
import Particles from 'react-particles-js';
import Header from '../components/Header';
import Background from '../images/bg.jpg';

class Home extends Component {


  render() {
      return (
        <div>
          <Header/>
          <Container>
          
          <h4>Never. Stop. Learning</h4>
              <p>
              I am a 23 year old    
              </p>
              <h2>Areas of Focus.</h2>
              <h5>I typically like being involved in a handful of areas rather than one specific type of work. Like a jack of all trades</h5>
            <Row>
              <Col>
                <h3>PWA's</h3>
                <p>Developing a SPA as a progressive web application? Sign me up!</p>
              </Col>
              <Col>
                <h3>Automation</h3>
                <p>Automated testing. Custom build scripts. Useful excel macros. Yes, yes, and yes.</p>
              </Col>
              <Col> 
                <h3>Programming</h3>
                <p>Nohing more satisftying than writing than compiling with no build errors or warnings. I need to chase that high.</p>
              </Col>
              <Col>
                <h3>UI/UX Design</h3>
                <p>Terrible interfaces ruin software. Lets make easy, effective, and fun interfaces.</p>
              
              
              </Col>
              
            </Row>
           
            <h2>Expert of many, master of none.</h2>
              <h4>I never want to stop learning.</h4>
              <p>
              Learning new and old technologies alike are a necessity in this field. Being able to absorb & apply knowledge is ctirical for professional and personal development. Luckily I find it enjoyable which makes it a hobby other than a chore. 
              </p>
            <Row>
              <Col>
                <h3>Things I like</h3>
                <p>Learning</p>
                <p>Experimenting with Tech - yes, lets try that new framework</p>
                <p>Working - borderline workaholic</p>
                <p>Javascript</p>

              
              </Col>
              <Col>
                <h3>!(Things I like)</h3>
                <p>Website builders - Lack of control upsets me</p>
                <p>Ugly code - spaghetti is only good as food</p>
                <p>Cryptocurrency - Get that blockchain out of here</p>
                <p>Politics - it hurts to watch</p>
               </Col>
    
              
            </Row>
          </Container>
        </div>
        );
      }
  }
  
  export default Home;
  