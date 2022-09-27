import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Nav from './Nav';
import selfie from './images/orionchen.jpg'
import Footer from './Footer'

const {colors} = theme;
const {fonts} = theme;
function Landing() { 

    const Container = styled.div`
        width: 100vw;
        height: 45.35vw;
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
        border-style: outset;
        border-color: black;
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
        border-style: solid;
        color: white;
    
    `

    const Subtitle = styled.div`
        color: ${colors.gold};
        font-weight: bold;
        font-size: 2vw;
    `

    

    return (
        <div>
            <Nav/>
            <Container>
                <MainBox>
                    <TextBox>
                        <Header>Orion Chen</Header>
                        <Description>
                        <br></br><Subtitle>Aspiring computer scientist. </Subtitle>
                        <br></br>Welcome to my portfolio. I am currently a 12th grade student at Markville Secondary pursuring a career in the field of computer science. Some of my skills include Python, Java, React, and Javascript. Competitive programming and app development is cool too.
                        <br></br>

                        </Description>
                    </TextBox>
                    <ImageBox>
                        
                    </ImageBox>
                </MainBox>
            </Container>
            <Footer/>

        </div>
    )

}

export default Landing;