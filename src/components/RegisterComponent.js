import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Home = styled.div`
    box-sizing: border-box;
    padding: 0 2rem;
    min-height: 100%;
    width: 100%;
`;

const Label = styled.label`
    font-size: 0.75rem;
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Input = styled.input`
    border: solid 1px #ccc;
    border-radius: 0;
    border-right: none;
    display: block;
    flex: 1;
    margin-right: 0;
    outline: none;
    padding: 0.5rem;
`;

const Button = styled.button`
    background: #108CCF;
    border: none;
    color: #FaFaFa;
    margin-left: 0;
    padding: 0 1rem;

    &:disabled {
        background: #ccc;
        color: #333;
    }
`;

class Register extends React.Component {
    state = {
        input: ''
    };

    setName = e => {
        e.preventDefault();
        this.props.setName(this.state.input);
    };

    onInput = ({target}) => {
        this.setState({input: target.value});
    };

    render = (props, state) => {
        return (
            <Home>
                <h1>Type type pass</h1>
                <p>Let's write an awesome story.</p>
                <form onSubmit={this.setName}>
                    <Label htmlFor="name">First, what's your name?</Label>
                    <InputContainer>
                        <Input id="name" type="text" value={this.state.input} onInput={this.onInput} />
                        <Button disabled={!this.state.input}>Set</Button>
                    </InputContainer>
                </form>
            </Home>
        );
    };
}

export default connect(s => {
    return {name: s.name};
}, d => {
    return {
        setName: value => d({type: 'set-name', value})
    };
})(Register);