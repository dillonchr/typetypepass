import { h } from 'preact';
import style from './style';

export default props => {
    return (
        <div class={style.read}>
            <p class={style.script}>{props.story}</p>
            <button onClick={props.onRestart} class={style.button}>Restart</button>
        </div>
    );
};
