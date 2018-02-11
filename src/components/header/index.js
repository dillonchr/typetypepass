import { h } from 'preact';
import { connect } from 'preact-redux';
import { getCurrentUrl, Link } from 'preact-router';
import style from './style';
import icono from 'icono';

const Footer = props => {
    const getCTA = () => {
        if (getCurrentUrl() === '/') {
            return <Link class={style.button}><i class="icono-rename"></i>Play</Link>
        } else {
            return <p class={style.playerCount}>{props.playerCount}</p>;
        }
    };

    return (
        <div class={style.footer}>
            <img class={style.appLogo} src="assets/type-type-pass-logo.gif" />
            {getCTA()}
        </div>
    );
};

export default connect(s => ({playerCount: s.players.length}))(Footer);
