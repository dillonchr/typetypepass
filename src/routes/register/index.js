import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';

class Register extends Component {
    state = {
        input: ''
    };

    setName = e => {
        e.preventDefault();
        this.props.dispatch({
            type: 'set-name',
            value: this.state.input
        });
    };

    onInput = ({target}) => {
        this.setState({input: target.value});
    };

    render(props, state) {
        return (
            <div class={style.home}>
                <h1>Type type pass</h1>
                <p>Let's write an awesome story.</p>
                <form onSubmit={this.setName}>
                    <label for="name" class={style.label}>First, what's your name?</label>
                    <div class={style.inputContainer}>
                        <input id="name" class={style.input} type="text" value={this.state.input} onInput={this.onInput} />
                        <button disabled={!this.state.input} class={style.button}>Set</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(s => ({name: s.name}))(Register);