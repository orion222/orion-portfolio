import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import logo from './images/gitLogo.png';

const {colors} = theme;
function Nav(){
    const Container = styled.div`
        position: fixed;
        width: 100vw;
        height: 5vw;
        background-color: ${colors.jade};
        font-family: 'Reem Kufi Fun', sans-serif;
        font-size: 1.5vw; 
        display: flex;
        justify-content: center;

        `;

    const ButtonContainer = styled.div`
        position: relative;
        width: 35vw;
        display: flex;


      
    `;

    

    const Button = styled.a`
        position: relative;
        margin: auto;
        margin-top: 1vw;
        &:hover{
            color: white;
            font-weight: 900;
        }
    `;

    const Logo = styled.a`
        width: 3vw;
        height: 4vw;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: 3vw;
        margin-top: 1vw;
        margin-left: 25vw;

        
    `
    

    const DoubleDeck = styled.div`
        height: 5vw;
        width: 35vw;
        text-align: center;
        margin-left: 33vw;
        background-color: white;
 

    `

    const Name = styled.div`
        
        
    `


    return (
        <Container>

            <DoubleDeck>
                orion chen
                <ButtonContainer>
                    
                    <Button>
                        Contact
                    </Button>
                    <Button >
                        Home
                    </Button>
                    <Button >
                        Resume
                    </Button>
                </ButtonContainer>

            </DoubleDeck>
            <Logo href='https://github.com/orion222' target="_blank">
        
            </Logo>
        

        </Container>
            
            
    );

}

export default Nav;