import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Nav from './Nav';
import Footer from './Footer'
import img from './images/orionchen.jpg'
import gitLogo from './images/logos/gitLogo.png';
import link from './images/link.png';

const {colors} = theme;
const {fonts} = theme;
function Projects() { 
    const Container = styled.div`
        position: relative;
    `
    const Body = styled.div`
        width: 100vw;
        height: 60vw;
        background-color: ${colors.mintGreen};
        display: flex;
        justify-content: center;
    `


    const Grid = styled.div`
        border-style: groove;
        width: 50vw;
        height: 40vw;
        margin-top: 10vw;
    
    `
    const GridRow = styled.tr`
        width: 50vw;
        height: 20vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `
    const Box = styled.div`
        width: 14vw;
        height: 18vw;
        background-color: white;
        border-style: solid;
        justify-content: center;
        position: relative;
    `
    const Cover = styled.div`
        width: 10vw;
        height: 8vw;
        background-image: url(${img});
        background-size: cover;
        margin-top: 1vw;
        border-style: solid;
        border-color: ${colors.grey};
        margin-left: auto;
        margin-right: auto;
    `

    const GameTitle = styled.div`
        font-family: 'Catamaran', sans-serif;
        text-align: center;
        position: relative;
        font-size: 1.5vw;
        color: #088DA5;
        margin-top: 0.5vw;
    `

    const Blurb = styled.div`
        text-align: justify;
        position: relative;
        font-size: .75vw;
        width: 12vw;
        margin-left: auto;
        margin-right: auto;
        background-color: green;
    `

    const LinkBox = styled.div`
        background-color: ${colors.pastelBlue};
        position: absolute;
        height: 2.6vw;
        width: 14vw;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const InnerBox = styled.div`
        height: 2.0vw;
        width: 6.0vw;
        display: flex;
        justify-content: space-around;
    `
    const LinkImage = styled.a`
        height: 2.0vw;
        width: 2.0vw;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    `
    return (
        <Container>
            <Body>
                <Grid>
                    <GridRow>
                        <Box>
                            <Cover/>
                            <GameTitle>notified</GameTitle>
                            <Blurb>aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa</Blurb>
                            <LinkBox>
                                <InnerBox>
                                    <LinkImage style={{backgroundImage: `url(${link})`}} href="dmoj.ca"></LinkImage>
                                    <LinkImage style={{backgroundImage: `url(${gitLogo})`}} href="dmoj.ca"></LinkImage>
                                </InnerBox> 
                            </LinkBox> 
                        </Box>
                        <Box></Box>
                        <Box></Box>
                    </GridRow>
                    <GridRow>
                        <Box>
                            <Cover/>
                            <GameTitle>notified</GameTitle>
                            <Blurb>hello hello hello hello hello hello hello hello hello hello hello hellohello hello</Blurb>
                            <LinkBox>
                            
                            </LinkBox>
                        </Box>
                        <Box></Box>
                        <Box></Box>
                    </GridRow>

                </Grid>

            </Body>
            <Nav/>
            <Footer/>



        </Container>
    )
}

export default Projects;

