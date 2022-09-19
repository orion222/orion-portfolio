import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import logo from './images/orionchen.jpg';


const{colors} = theme;
function Footer(){

    const Container = styled.div`
        position: relative;
        width: 100vw;
        height: 3.45vw;
        background-color: ${colors.grey};
        font-size: 1.5vw; 
        display: flex;
        align-items: center;

    `;

    const Subtitle = styled.div`
        text-size: 1.5vw;
        text-weight: bold;
        margin-left: 5vw;
        font-family: 'Poppins', sans-serif;
    `

    const ButtonContainer = styled.div`
        width: 80vw;
        height: 2.5vw;
        display: flex;
        justify-content: center;

    `
    const Button = styled.img`
        width: 2.5vw;
        background-repeat: no-repeat;
        background-size: 2.5vw;
        border: none !important;

    `

    const logos = [
        "devpost", 
        "discord", 
        "git", 
        "dmoj", 
        "instagram"
    ]
    // displayLogos.defaultProps = {name: 'instagram'};
    // const displayLogos = (props) => {
    //     return (
    //         <Button/>
    //     )
    // }

    return (
        <Container>
            <Subtitle>My links</Subtitle>
            <ButtonContainer>
                {/* {displayLogos} */}
            </ButtonContainer>
        </Container>
    )
}

export default Footer;