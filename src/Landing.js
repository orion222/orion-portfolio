import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Nav from './Nav';
import selfie from './images/orionchen.jpg'

const {colors} = theme;
const {fonts} = theme;
function Landing() { 

    const Container = styled.div`
        width: 100vw;
        height: 47.5vw;
        background-color: ${colors.mintGreen};
        display: flex;
        justify-content: center;
        align-items: center;

    `

    const MainBox = styled.div`
        width: 60vw;
        background-color: ${colors.pastelBlue};
        display: flex;
        align-items: center;
        border-radius: 5vw;
    `

    const TextBox = styled.div`
        width: 30vw;
        height: 25vw;
        margin-left: 3vw;

    `

    const Header = styled.div`
        font-weight: 900;
        font-size: 5vw;
        color: white;
        

    `
    const Description = styled.div`
        font-family: ${fonts.wavy};
        font-size: 1.3vw;
        text-align: justify;
    `

    const ImageBox = styled.div`
        background-image: url(${selfie});
        background-repeat: no-repeat;
        background-size: 15vw;
        width: 15vw;
        height: 15vw;
        margin-left: 6vw;
        border-radius: 50%;
    
    `

    

    return (
        <div>
            <Nav/>
            <Container>
                <MainBox>
                    <TextBox>
                        <Header>Orion Chen</Header>
                        <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Description>
                    </TextBox>
                    <ImageBox>
                        
                    </ImageBox>
                </MainBox>
            </Container>

        </div>
    )

}

export default Landing;