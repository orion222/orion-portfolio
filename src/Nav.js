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
        font-family: Courier new, monospace;
        font-size: 1.5vw; 
        display: flex;

        `;

    const ButtonContainer = styled.div`
        position: relative;
        margin-top: auto;
        margin-left: 33vw;
        width: 35vw;
        display: flex;
        background-color: white;


      
    `;

    const Button = styled.a`
        position: relative;
        margin: auto;
        &:hover{
            font-weight: 900;
        }
        &:active{

        }
    `;

    const Logo = styled.a`
        width: 3vw;
        height: 4vw;
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: 3vw;
        margin-left: 27vw;
        margin-top: 1vw;

        
    `


    return (
        <Container>
            <div>
                orino chen
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

            </div>
            
            <Logo href='https://github.com/orion222' target="_blank">
            
            </Logo>
          

        </Container>
            
    );

}

export default Nav;