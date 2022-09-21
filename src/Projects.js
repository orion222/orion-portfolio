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
    const Container = styled.div`
        width: 100vw;
        height: 47vw;
        background-color: ${colors.mintGreen};
        display: flex;
        justify-content: center;

    `

    return (
        <div>
            <Nav/>
            <Container>

            
            </Container>
            <Footer/>

        </div>
    )
}

export default Projects;

