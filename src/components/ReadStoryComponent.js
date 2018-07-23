import React from 'react';
import styled from 'styled-components';

const Read = styled.div`
    padding: 1rem;
`;

const Script = styled.p`
    font-size: 1.25rem;
    margin: 0 0 1rem;
`;

const Button = styled.button`
    background: #671F75;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 0.5rem;
`;

export default props => {
    return (
        <Read>
            <Script>{props.story}</Script>
            <Button onClick={props.onRestart}>
                <i>reset</i>
            </Button>
        </Read>
    );
};
