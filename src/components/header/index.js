import { h } from 'preact';
import { connect } from 'preact-redux';
import style from './style';

const Footer = props => {
    return (
        <div class={style.footer}>
            <img class={style.appLogo} src="assets/type-type-pass-logo.gif" />
            <p class={style.playerCount}>{props.playerCount}</p>
        </div>
    );
};

export default connect(s => ({playerCount: s.players.length}))(Footer);
