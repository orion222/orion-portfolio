import './App.css';
import React from 'react';
import styled from 'styled-components';


function Nav(){
    const Container = styled.div`
        position: fixed;
        width: 100%;
        height: 5vw;
        margin-top: 100vh;
        margin: auto;
        background-color: green;
        font-family: Courier new, monospace;
        font-size: 2vw; 
        `;

    const Button = styled.div`
        width: 10%;
        padding-top: 1vw;
        position: relative;
        float: right;
        display: flex;
    `;

    return (

        <Container>
            <Button >
                Contact
            </Button>

        
        </Container>

    );

}

export default Nav;