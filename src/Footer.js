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
        position: absolute;
        width: 100vw;
        height: 3.45vw;
        min-height: 60px;
        background-color: ${colors.grey};
        font-size: clamp(20px, 1.5vw, 1.5vw); 
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
    `;

    const Subtitle = styled.div`
        text-size: 1.5vw;
        text-weight: bold;
        font-family: 'Poppins', sans-serif;
    `

    const ButtonContainer = styled.div`
        width: 30vw;
        min-width: 500px;
        height: 2.5vw;
        min-height: 40px;
        display: flex;
        justify-content: space-evenly;
        margin-left: 5vw;
        background-color: #CFD2CF;
        align-items: center;
        border-radius: 2vw;
        

    `

    const logos = [
        devpost, 
        discord, 
        git, 
        dmoj, 
        instagram
    ]

    const logosLinks = [
        "https://devpost.com/0222orion?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
        "https://discord.com/users/244511586709012482",
        "https://github.com/orion222",
        "https://dmoj.ca/user/Orion222",
        "https://www.instagram.com/orion_222/"
    ]



    
    const displayLogos = function(logos, logosLinks) {
        const buttons = [];
        for (let i = 0; i < logos.length; i++){
            const Button = styled.div`
                width: 2.5vw;
                min-width: 50px;
                min-height: 50px;
                height: 2.3vw;
                background-image: url(${logos[i]});
                background-size: clamp(25px, 2.2vw, 2.2vw);
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

        return (buttons.map((Button) => <div>{Button}</div>));
        
    
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