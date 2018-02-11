/* eslint-disable indent */
import { h } from 'preact';
import { connect } from 'preact-redux';
import Register from './register';
import Read from './read';
import Story from './story';
import Wait from './wait';

const Router = props => {

    const onRestart = () => props.dispatch({ type: 'restart' });

    const getCurrentRoute = () => {
        if (props.needsName) {
            return <Register />;
        }
        if (props.waiting) {
            return <Wait />;
        }
        if (props.story) {
            return <Read story={props.story} onRestart={onRestart} />;
        }
        return <Story />;
    };

    return (
        <div>
           {getCurrentRoute()}
        </div>
    );
};

export default connect(s => ({
    needsName: !s.name,
    waiting: s.waiting,
    story: s.story
}))(Router);
