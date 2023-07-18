import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import logo from './images/logos/gitLogo.png';
import logo2 from './images/logos/gitLogoHighlighted.png';


const {colors} = theme;
function Nav(){
    const Container = styled.div`
        position: fixed;
        width: 100vw;
        height: clamp(50px, 5vw, 5vw);
        background-color: ${colors.jade};
        font-family: 'Reem Kufi Fun', sans-serif;
        font-size: clamp(20px, 1.5vw, 1.5vw); 
        display: flex;
        top: 0;
        justify-content: center;

        `;

    const ButtonContainer = styled.div`
        position: relative;
        width: 35vw;
        display: flex;
        margin-top: 2.5vw;



      
    `;

    

    const Button = styled.a`
        position: relative;
        margin: auto;
        font-family: 'Reem Kufi Fun', sans-serif;
        &:hover{
            color: white;
            font-weight: 900;
        }
        color: black;
        &:link { text-decoration: none; }
        &:visited { text-decoration: none; }
        &:hover { text-decoration: none; }
        &:active { text-decoration: none; }
        
    `;

    const Logo = styled.a`
        width: 3vw;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: 3vw;
        margin-top: 1vw;
        margin-left: 28vw;
        &:hover{
            background-image: url(${logo2});
        }

        
    `
    

    const DoubleDecker = styled.div`
        height: 5vw;
        width: 35vw;
        text-align: center;
        margin-left: 15vw;
        font-family: 'Open Sans', sans-serif;
 

    `

    const Name = styled.div`
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 6vw;
        font-family: 'Indie Flower', cursive;
        font-weight: 900;

        
    `


    return (
        <Container>
            <Name>
                Orion Chen
            </Name>

            <DoubleDecker>
                
                <ButtonContainer>
                    
                    <Button href='/orion-portfolio/#/projects'>
                        Projects
                    </Button>
                    <Button href='/orion-portfolio/'>
                        Home
                    </Button>
                    <Button href='https://docs.google.com/document/d/1Xv1uMXS3k9yu0NcZQmkbjQ-D6gSYQVQP/edit?usp=sharing&ouid=105402434894730909309&rtpof=true&sd=true' target = '_blank'>
                        Resume
                    </Button>
                </ButtonContainer>

            </DoubleDecker>
                

         
            <Logo href='https://github.com/orion222/orion-portfolio' target="_blank">
        
            </Logo>
        

        </Container>
            
            
    );

}

export default Nav;