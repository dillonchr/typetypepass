import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import getRandoPrompt from './GetRandomPrompt';

const Screen = styled.div`
    min-height: 100%;
    padding: 0 2rem;
    width: 100%;
`;

const Prompt = styled.div`
    background: white;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    font-size: 1.1rem;
    margin: 1rem 0;
    padding: .25rem;
`;

const PromptParagraph = styled.p`
    margin: .5rem 0;
`;

const InputContainer = styled.form`
    width: 100%;
`;

const Input = styled.textarea`
    border: solid 1px #eee;
    border-radius: 0;
    display: block;
    flex: 1;
    font-size: 1rem;
    height: 4rem;
    width: 100%;

    &:focus {
        border-color: #108CCF;
        color: #333;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: purple;
    border: none;
    color: white;
    flex: 1;
    margin: 0;
    padding: .5rem;

    &:disabled {
        background: #b298b2;
    }
`;

class Story extends React.PureComponent {
    state = {
        input: ''
    };

    onSubmit = e => {
        e.preventDefault();
        this.sendSentence();
    };

    sendSentence = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        this.props.sendSentence(this.state.input);
    };

    endStory = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        this.props.endStory(this.state.input);
    };

    onChange = ({target}) => {
        this.setState({input: target.value});
    };

    render() {
        return (
            <Screen>
                <Prompt>
                    {this.props.prompt && <PromptParagraph>...</PromptParagraph>}
                    <PromptParagraph>{this.props.prompt}</PromptParagraph>
                    <InputContainer onSubmit={this.onSubmit}>
                        <Input autoFocus
                                  onChange={this.onChange}
                                  placeholder={getRandoPrompt()}/>
                        <ButtonContainer>
                            <Button disabled={!this.props.canEnd || !this.state.input} onClick={this.endStory}>
                                The End
                            </Button>
                            <Button disabled={!this.state.input} onClick={this.sendSentence}>
                                Send
                            </Button>
                        </ButtonContainer>
                    </InputContainer>
                </Prompt>
            </Screen>
        );
    }
}

export default connect(s => ({
    prompt: s.prompt,
    canEnd: s.cycle > 3
}), d => ({
    sendSentence: s => d({type: 'add-line', value: s}),
    endStory: value => d({type: 'end-story', value})
}))(Story);
