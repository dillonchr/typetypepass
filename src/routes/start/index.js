import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';
import style from './style';

class Start extends Component {
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

    onInput = ({target}) => {
        this.setState({input: target.value});
    };

    render(props, state) {
        return (
            <div class={style.screen}>
                <h1>Kick off our story...</h1>
                <form onSubmit={this.sendSentence}>
                    <label for="name" class={style.label}>First sentence</label>
                    <div class={style.inputContainer}>
                        <input id="name" class={style.input} type="text" value={this.state.input} onChange={this.onInput} />
                        <button class={style.button}>Set</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(s => ({name: s.name}))(Start);