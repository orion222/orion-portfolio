import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const {colors} = theme;
function Nav(){
    const Container = styled.div`
        position: fixed;
        width: 100vw;
        height: 5vw;
        background-color: ${colors.jade};
        font-family: Courier new, monospace;
        font-size: 1.5vw; 
        padding-left: auto;
        padding-right: auto;
        display: flex;
        justify-content: center;
        `;

    const ButtonContainer = styled.div`
        position: relative;
        margin-top: auto;
        width: 35vw;
        display: flex;
      
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

    return (
        <Container>
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

        
        </Container>

    );

}

export default Nav;