import { h } from 'preact';
import style from './style';

export default () => (
    <div class={style.home}>
        <h1>Type Type Pass</h1>
        <p>A multiplayer collaborative writing game.</p>
        <h2 id="rules">Rules</h2>
        <p>You need <strong>3 or more people</strong> to kick off the game. The more the merrier but don't get greedy.</p>
        <p>Once the minimum number of players have connected to the server, the first player in the round will be able to kick off the story with the first sentence.</p>
        <h3 id="rules-turn">Turn</h3>
        <p>A player's turn consists of <strong>simply writing a single sentence</strong> to continue the story. No pressure. The less method there is the better the madness.</p>
        <p>Except for the first sentence, everyone will have the preceding sentence of the story displayed as they write their own sentence. Once they submit their sentence it's passed to the next player for their continuation.</p>
        <h3 id="rules-ending">Ending the story</h3>
        <p>Each time player one gets their turn, that's counted as a new round. Starting in <strong>round 4</strong>, <strong>players can end the story</strong>. Players will be able to write their sentence and decide if it's the last sentence or to send it to the next player. This can continue ad infinitum.</p>
        <h3 id="rules-reading">Reading the final product</h3>
        <p>Once the story has ended, it will be delivered to everyone's device to read on their own.</p>
        <h2 id="support">Support</h2>
        <p>This is an experimental game using experimental technology (to me anyway). So if you experience any issues or have any feedback please send it our way! <a href="mailto:support@typetypepass.com">support@typetypepass.com</a>.</p>
        <h2>Enjoy!</h2>
    </div>
);