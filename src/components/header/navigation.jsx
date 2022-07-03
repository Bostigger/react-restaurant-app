import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Route, Routes,NavLink} from "react-router-dom";
import App from "../../App";
import Menu from "../body/menu/Menu";
import About from "../body/comments/pages/AboutPage";
import Contact from "../body/comments/pages/Contact";
import '../../assets/css/Main.css'
import Logo from "../../assets/images/rex-logo.png";
import Home from "../body/comments/pages/Home";


export default function Navigation() {
   return (
       <div>
           <Navbar bg="dark" expand="lg">
               <Container>
                   <Navbar.Brand style={{color:'white'}}> <img src={Logo} style={{height:'70px'}} alt=""/> </Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="me-auto">
                           <Nav.Link><NavLink to="/" >Home</NavLink></Nav.Link>
                           <Nav.Link><NavLink to="/menu">Menu</NavLink></Nav.Link>
                           <Nav.Link><NavLink to="/about-us">About Us</NavLink></Nav.Link>
                           <Nav.Link><NavLink to="/contact-us">Contact Us</NavLink></Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
               </Container>
           </Navbar>

       </div>
   );
}