import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import InputIcon from './InputIcon';

const Header = styled.div`
    align-items: center;
    background-color: #671F75;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;
const Logo = styled.img`
    height: 2rem;
    margin: 1rem 0;
`;
const PlayerCount = styled.p`
    align-items: center;
    background-color: #9965AB;
    border-radius: 50%;
    display: flex;
    font-size: 0.7rem;
    font-weight: 700;
    height: 2rem;
    justify-content: center;
    padding: 1rem;
    width: 2rem;
`;
const PlayButton = styled.span`
    align-items: center;
    border: none;
    color: #FaFaFa;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: .7rem;
`;

const HeaderComponent = ({playerCount, currentUrl}) => {
    const getCTA = () => {
        if (currentUrl === '/') {
            return <Link to="/play"><PlayButton><InputIcon /> Play</PlayButton></Link>;
        } else {
            return <PlayerCount>{playerCount}</PlayerCount>;
        }
    };

    return (
        <Header>
            <Logo src="assets/type-type-pass-logo.gif" />
            {getCTA()}
        </Header>
    );
};

export default connect(s => ({
    playerCount: s.players.length,
    currentUrl: s.currentUrl
}))(HeaderComponent);

