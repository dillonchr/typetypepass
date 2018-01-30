import { h } from 'preact';
import { connect } from 'preact-redux';
import Register from './register';
import Read from './read';
import Story from './story';
import Wait from './wait';

const Router = props => {

    const getCurrentRoute = () => {
        console.log(props);
        if (props.needsName) {
            return <Register />;
        }
        if (props.waiting) {
            return <Wait />;
        }
        if (props.story) {
            return <Read story={props.story} onRestart={() => props.dispatch({type: 'restart'})} />;
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
