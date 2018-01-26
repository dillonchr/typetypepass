import { h } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';
import style from './style';

const Wait = props => {
    if (!props.waiting) {
        const target = props.hasStory ? '/read' : '/story';
        route(target, true);
    }

    return (
        <div class={style.home}>
            <h1>Awaiting other players...</h1>
        </div>
    );
};

export default connect(s => ({waiting: s.waiting, hasStory: !!s.story}))(Wait);
