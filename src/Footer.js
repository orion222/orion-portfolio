import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import devpost from './images/logos/devpostLogo.png';
import discord from './images/logos/discordLogo.png';
import git from './images/logos/gitLogo.png';
import dmoj from './images/logos/dmojLogo.png';
import instagram from './images/logos/instagramLogo.png';



const{colors} = theme;
function Footer(){

    const Container = styled.div`
        position: fixed;
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
        margin-left: 25vw;
    `

    const ButtonContainer = styled.div`
        width: 30vw;
        height: 2.5vw;
        display: flex;
        justify-content: space-evenly;
        margin-left: 5vw;
        background-color: #CFD2CF;
        align-items: center;
        border-radius: 2vw;
        

    `

    const logos = [
        "devpost", 
        "discord", 
        "git", 
        "dmoj", 
        "instagram"
    ]

    const logosLinks = [
        "https://abc.com",
        "https://abc.com",
        "https://abc.com",
        "https://abc.com",
        "https://abc.com",
    ]



    
    const displayLogos = function(logos, logosLinks) {
        const buttons = [];
        for (let i = 0; i < logos.length; i++){
            const Button = styled.div`
                width: 2.5vw;
                height: 2.3vw;
                background-image: url(${"./images/logos/" + logos[i] +  "Logo.png"});
                background-size: 2.2vw;
                background-repeat: no-repeat;
                background-position: center;
                &:hover {
                    transition: transform 1s;
                    transform: translateY(-1vw);

                }    

                

            `
            const Anc = styled.a`
                &:link { text-decoration: none; }
                &:visited { text-decoration: none; }
                &:hover { text-decoration: none; }
                &:active { text-decoration: none; }


            `
            buttons.push(<Anc href = {logosLinks[i]} target="_BLANK"><Button></Button></Anc>);
        }

        return (buttons.map((Button) => {return (<div>{Button}</div>);}));
        
    
    };
    

    return (
        <Container>
            <Subtitle>My links</Subtitle>
            <ButtonContainer>
                {displayLogos(logos, logosLinks)}
            </ButtonContainer> 
        </Container>
    )
}

export default Footer;