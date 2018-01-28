import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';

class Story extends Component {
    state = {
        input: ''
    };

    sendSentence = e => {
        e.preventDefault();
        this.props.dispatch({
            type: 'add-line',
            value: this.state.input
        });
    };

    endStory = () => {
        this.props.dispatch({
            type: 'end-story',
            value: this.state.input
        });
    };

    onInput = ({target}) => {
        this.setState({input: target.value});
    };

    render(props, state) {
        const promptLine = props.prompt || 'Kick off our story...';

        return (
            <div class={style.screen}>
                <h1>{promptLine}</h1>
                <form class={style.inputContainer} onSubmit={this.sendSentence}>
                    <input class={style.input} type="text" value={this.state.input} onChange={this.onInput} />
                    <button class={style.button}>Send</button>
                </form>
                {props.canEnd && <button onClick={this.endStory} class={style.button}>End Story</button>}
            </div>
        );
    }
}

export default connect(s => ({name: s.name, prompt: s.prompt, canEnd: s.cycle > 3, waiting: s.waiting}))(Story);
