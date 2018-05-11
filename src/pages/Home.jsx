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
          <h2>What I've done</h2>
          <h4>Never. Stop. Learning</h4>
              <p>
              As someone who was raised with technology, I have observed that the ever changing industry requires constant learning. 
              It's an evolving market    
              </p>
            <Row>
              <Col>
                <h3>Programming</h3>
              
              </Col>
              <Col>
                <h3>Automation</h3>
                <p>Wether it is automating excel spreadsheets or speeding up build processes. I absolutely love developing automated processes to save time and remove human errors from repetitive tasks.</p>
              </Col>
              <Col> 
                <h3>Testing</h3>
                <p>Human error happens on both the users and developers (myself included) </p>
              </Col>
              <Col>
                <h3>UI/UX Design</h3>

              
              </Col>
              
            </Row>
            <h2>Expert of many, master of none.</h2>
              <h4>Never. Stop. Learning</h4>
              <p>
              As someone who was raised with technology, I have observed that the ever changing industry requires constant learning. 
              It's an evolving market    
              </p>
            <Row>
              <Col>
                <h3>Programming</h3>
              
              </Col>
              <Col>
                <h3>Automation</h3>
                <p>Wether it is automating excel spreadsheets or speeding up build processes. I absolutely love developing automated processes to save time and remove human errors from repetitive tasks.</p>
              </Col>
              <Col> 
                <h3>Testing</h3>
                <p>Human error happens on both the users and developers (myself included) </p>
              </Col>
              <Col>
                <h3>UI/UX Design</h3>

              
              </Col>
              
            </Row>
            <h2>Expert of many, master of none.</h2>
              <h4>Never. Stop. Learning</h4>
              <p>
              As someone who was raised with technology, I have observed that the ever changing industry requires constant learning. 
              It's an evolving market    
              </p>
            <Row>
              <Col>
                <h3>Things I like</h3>
                <p>Trying out new frameworks, libraries, and projects</p>

              
              </Col>
              <Col>
                <h3>!(Things I like)</h3>
                <p>Website builders - Sure they are "powerful" but it's not much use when you can't edit the code</p>
               </Col>
    
              
            </Row>
          </Container>
        </div>
        );
      }
  }
  
  export default Home;
  