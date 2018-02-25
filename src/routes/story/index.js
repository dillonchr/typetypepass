import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';
import getRandoPrompt from './random-prompt';

class Story extends Component {
    state = {
        input: ''
    };

    onSubmit = e => {
        e.preventDefault();
        this.sendSentence();
    };

    sendSentence = () => this.props.sendSentence(this.state.input);

    endStory = () => this.props.endStory(this.state.input);

    onInput = ({target}) => {
        this.setState({input: target.value});
    };

    render(props, state) {
        return (
            <div class={style.screen}>
                <div class={style.prompt}>
                    {props.prompt && <p>...</p>}
                    <p>{props.prompt}</p>
                    <form class={style.inputContainer} onSubmit={this.onSubmit}>
                        <textarea autoFocus
                                  class={style.input}
                                  value={this.state.input}
                                  onInput={this.onInput}
                                  placeholder={getRandoPrompt()} />
                        <div class={style.buttonContainer}>
                            <button disabled={!props.canEnd || !this.state.input} onClick={this.endStory} class={style.button}>
                                <i class="icono-document"></i>
                            </button>
                            <button disabled={!this.state.input} class={style.button} onClick={this.sendSentence}>
                                <i class="icono-plus"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(s => ({
    prompt: s.prompt,
    canEnd: s.cycle > 3
}), d => ({
    sendSentence: s => d({ type: 'add-line', value: s }),
    endStory: s => d({type: 'end-story', value: s})
}))(Story);
