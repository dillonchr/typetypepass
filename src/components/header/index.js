import { h } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router';
import style from './style';
import icono from 'icono';

const Footer = ({
    playerCount,
    currentUrl
                }) => {
    const getCTA = () => {
        if (currentUrl === '/') {
            return <Link class={style.button} href="/play"><i class="icono-rename"></i>Play</Link>
        } else {
            return <p class={style.playerCount}>{playerCount}</p>;
        }
    };

    return (
        <div class={style.footer}>
            <img class={style.appLogo} src="assets/type-type-pass-logo.gif" />
            {getCTA()}
        </div>
    );
};

export default connect(s => ({
    playerCount: s.players.length,
    currentUrl: s.currentUrl
}))(Footer);
