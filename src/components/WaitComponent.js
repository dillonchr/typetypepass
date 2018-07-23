import React from 'react';
import styled from 'styled-components';

const Home = styled.div`
    padding: 0 2rem;
    text-align: center;
    width: 100%;
`;

const Image = styled.img`
    max-width: 50%;

    @media (min-width: 600px) {
        max-width: 300px;
    }
`;

export default () => (
    <Home>
        <Image src="assets/typewriter-waiting.gif" alt="Waiting for the other players to type." />
        <p>Awaiting other players to write something epic.</p>
    </Home>
);
