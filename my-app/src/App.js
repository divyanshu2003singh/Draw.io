// App.js
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import './App.css';

const generateRandomData = () => {
  // Generate random content
  return Math.random().toString(36).substring(2, 15);
};

const pages = {
  home: <Home />,
  about: <About />,
  projects: <Projects />,
  resume: <Resume />,
  blogs: <Blogs />,
};

function Home() {
  return (
    <div>
      <h2>Hi there, I'm Divyanshu Singh...</h2>
      <img src="https://via.placeholder.com/150" alt="Divyanshu Singh" />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>{generateRandomData()}</p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <Row>
        {[1, 2, 3].map((item) => (
          <Col key={item} md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{generateRandomData()}</Card.Title>
                <Card.Text>{generateRandomData()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>{generateRandomData()}</p>
    </div>
  );
}

function Blogs() {
  return (
    <div>
      <h2>Blogs</h2>
      <p>{generateRandomData()}</p>
    </div>
  );
}

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setSelectedPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('about')}>About</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('resume')}>Resume</Nav.Link>
            <Nav.Link onClick={() => setSelectedPage('blogs')}>Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col md={3} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link onClick={() => setSelectedPage('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => setSelectedPage('about')}>About</Nav.Link>
              <Nav.Link onClick={() => setSelectedPage('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => setSelectedPage('resume')}>Resume</Nav.Link>
              <Nav.Link onClick={() => setSelectedPage('blogs')}>Blogs</Nav.Link>
            </Nav>
          </Col>
          <Col md={9} className="main-content">
            {pages[selectedPage]}
          </Col>
        </Row>
      </Container>
      <footer className="App-footer mt-5">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
