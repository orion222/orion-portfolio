import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Nav from './Nav';
import selfie from './images/orionchen.jpg'
import Footer from './Footer'

const {colors} = theme;
const {fonts} = theme;
function Projects() { 


    return (
        <div>
            <Nav/>



            <Footer/>

        </div>
    )
}

export default Projects;

