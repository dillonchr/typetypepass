import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';
import style from './style';

const Footer = props => {
    const noun = props.playerCount === 1 ? 'player' : 'players';
    return (
        <div class={style.footer}>
            <p>{props.playerCount} {noun} online</p>
        </div>
    );
};

export default connect(s => ({playerCount: s.players.length}))(Footer);
