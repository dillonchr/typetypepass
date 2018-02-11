import { h } from 'preact';
import style from './style';

export default () => (
    <div class={style.home}>
        <img src="assets/typewriter-waiting.gif" alt="Waiting for the other players to type." />
        <p>Awaiting other players to write something epic.</p>
    </div>
);
