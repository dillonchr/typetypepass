import { h, Component } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';
import style from './style';

class Home extends Component {
    state = {
        input: ''
    };

    progressIfNameIsSet = () => {
        if (this.props.name) {
            route('/wait', true);
        }
    };

    componentWillMount = () => {
        this.progressIfNameIsSet();
    };

    setName = e => {
        e.preventDefault();
        this.props.dispatch({
            type: 'set-name',
            value: this.state.input
        });
        route('/wait', true);
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
                    <label for="name" class={style.label}>What's your name?</label>
                    <div class={style.inputContainer}>
                        <input id="name" class={style.input} type="text" value={this.state.input} onChange={this.onInput} />
                        <button class={style.button}>Set</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(s => ({name: s.name}))(Home);