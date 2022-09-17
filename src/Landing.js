import './App.css';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import Nav from './Nav';

const {colors} = theme;
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
        height: 30vw;
        width: 60vw;
        background-color: ${colors.pastelBlue};
        display: flex;
        margin: auto;
        align-items: center;
    `

    const TextBox = styled.div`
        height: 20vw;
        width: 30vw;
        background-color: white;
        left: 2.5vw;

    `

    const Header = styled.div`
        font-weight: 900;
        font-size: 5vw;

    `
    const Description = styled.div`
        font-size: 1.3vw;
    `

    

    return (
        <div>
            <Nav/>
            <Container>
                <MainBox>
                    <div>
                        This is...
                        <TextBox>
                            <Header>Orion Chen</Header>
                            <Description>
                            lorem ipsum and that bullshits
                            </Description>
                        </TextBox>


                    

                    </div>
                   

                </MainBox>
                
            </Container>


        </div>
        
        
    )

}

export default Landing;