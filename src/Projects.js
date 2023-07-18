import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Nav from './Nav';
import Footer from './Footer'
import { useState } from 'react';

// images
import nullCover from './images/projects/nullCover.png'
import gitLogo from './images/logos/gitLogo.png';
import gitLogoHighlighted from './images/logos/gitLogoHighlighted.png'
import link from './images/projects/link.png';
import linkHighlighted from './images/projects/linkHighlighted.png';
import notifiedCover from './images/projects/notifiedCover.png';
import undertaleCover from './images/projects/undertaleCover.png';
import cpCover from './images/projects/cpCover.png';
import stackerCover from './images/projects/stackerCover.png';
import oreo from './images/projects/oreo.png';
import omoriCover from './images/projects/omoriCover.png';


const {colors} = theme;
const {fonts} = theme;
function Projects() { 
    

    const [page, setPage] = useState(0);
    const createCovers = () => {
        const grid = []
        // for each row store 3 projects
        for (let i = 0; i < projects.length; i++){
            // for each project
            const row = []
            for (let x = 0; x < 3; x++){
                if (projects[i][x].name === "null"){
                    row.push(
                        <Box>
                            <NullImage/>
                        </Box>

                    );
                }
                else{
       
                    row.push(
                        <div>
                            <Box>
                                <Cover cover = {projects[i][x].cover}/>
                                <GameTitle>{projects[i][x].name}</GameTitle>
                                <LinkBox>
                                        <InnerBox>
                                            <LinkImage href={projects[i][x].link} target="_blank"/>
                                            <GitImage href={projects[i][x].gitLink} target="_blank"/>
                                        </InnerBox> 
                                </LinkBox> 

                            </Box>
                        </div>
                    );
                }
            }
            grid.push(  <div>
                            <GridRow>
                                {row}
                            </GridRow>
                        </div>);
        }

        return (grid.map((row) => <div>{row}</div>));

    }

    
    return (
        <Container>
            <Nav/>        
            <Body>
                <div style={{alignItems:"center"}}>
                    <Grid>
                        {createCovers()}
                    </Grid>
                </div>

                
            </Body>
            <Oreo/>
            <Footer/>

            



        </Container>
    )
}

export default Projects;
const Cover = styled.div`
    width: clamp(90px, 8vw, 8vw);
    height: clamp(70px, 8vw, 8vw);
    background-image: url(${(props) => props.cover});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 1vw;
    border-style: solid;
    border-color: ${colors.grey};
    margin-left: auto;
    margin-right: auto;
`
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.mintGreen};
    display: flex;
    justify-content: center;


`
const Body = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Grid = styled.div`
    border-style: groove;
    width: 50vw;
    height: 40vw;
    margin-top: 2vw;
`
const GridRow = styled.tr`
    width: 50vw;
    height: 20vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Box = styled.div`
    width: clamp(100px, 10vw, 15.4vw);
    height: clamp(100px, 15vw, 15.4vw);
    background-color: white;
    border-style: solid;
    justify-content: center;
    position: relative;
`
const GameTitle = styled.div`
    font-family: 'Catamaran', sans-serif;
    text-align: center;
    position: relative;
    font-size: 1.5vw;
    color: black;
    margin-top: 0.5vw;
`

const Blurb = styled.div`
    position: relative;
    font-size: .75vw;
    width: 12vw;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

const LinkBox = styled.div`
    background-color: ${colors.pastelBlue};
    position: absolute;
    height: 2.6vw;
    width: clamp(100px, 10vw, 10vw);
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

const GitImage = styled.a`
    height: 2.0vw;
    width: 2.0vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${gitLogo});
    &:hover{
        background-image: url(${gitLogoHighlighted});
    }
`

const LinkImage = styled.a`
    height: 2.0vw;
    width: 2.0vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${link});
    &:hover{
        background-image: url(${linkHighlighted});
    }
`

const NullImage = styled.div`
    background-image: url(${nullCover});
    background-size: 10vw;
    height: 10vw;
    width: 10vw;
    margin: auto;
`

const Oreo = styled.div`
    background-image: url(${oreo});
    background-size: 10vw;
    background-repeat: no-repeat;
    width: 10vw;
    height: 4.9vw;
    position: absolute;
    bottom: 50px;
    right: 10px;

`


const projects = [
    [
        {
            name: "notified",
            blurb: "A community-driven bank of notes and tests. Made by yung coders ©",
            link: "https://staynotified.xyz",
            gitLink: "https://github.com/Coders222/notified.",
            cover: notifiedCover

        },
        {
            name: "UNDERTALE",
            blurb: "A Java remake of the game UNDERTALE by Orion Chen and Nicky Lam",
            link: "https://undertale.com/about/",
            gitLink: "https://github.com/orion222/undertale---ics3u",
            cover: undertaleCover
        },

        {
            name: "Stacker",
            blurb: "A Python remake of the arcade game Stacker by Orion Chen and Jacky Men",
            link: "https://en.wikipedia.org/wiki/Stacker_(arcade_game)",
            gitLink: "https://github.com/orion222/ICS2U-Stacker",
            cover: stackerCover
        },
    ],

    [
        {
            name: "CP",
            blurb: "Competitive programming solutions to contests such as CCC written in Python and Java",
            link: "https://dmoj.ca",
            gitLink: "https://github.com/orion222/competitive-programming",
            cover: cpCover
        },
        { 
            name: "OMORI",
            blurb: "A Java remake of the game OMORI by Orion Chen and Nicky Lam. ",
            link: "https://www.omori-game.com/en",
            gitLink: "https://github.com/Coders222/omori---ics4u",
            cover: omoriCover
        },
        { name: "null"}
    ]
]