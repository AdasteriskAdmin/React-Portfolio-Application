import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Typer from '../components/Typer';
import Particles from 'react-particles-js';
import Background from '../images/bg.jpg';

class Header extends Component {


  render() {
      return (
        <div className="main-wrapper" style={{ position: 'relative', width: '100%', height: '80vh', zIndex: '2'}}>
          <div className="foreground-wrapper">
            <Container>
              <div style={{  position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', margin: '10% 0%', padding: '30px'}}>
                <h1 style={{fontSize: '6rem'}}>Hello!</h1>
                <h2>The name's Jeremy, I enjoy <Typer/></h2>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <Button color="primary">Learn More</Button>
                </p>
              </div>
            </Container>
          </div>
          <div className="particle-wrapper">
            <Particles 
                params={{
                  particles: {
                    line_linked: {
                      
                      color: '#ffffff'
                      
                      
                    },
                    size: {
                      random: 'true',
                      value: '4'
                    },
                    number: {
                      value: '80'
                    }
                  }
                }}
                style={{

                  zIndex: '-1',
                  width: '100%',
                  position: 'absolute'
                }}
            />
          </div>
        </div>
        );
      }
  }
  
  export default Header;
  