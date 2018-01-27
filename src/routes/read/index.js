import { h } from 'preact';
import { route } from 'preact-router';
import { connect } from 'preact-redux';
import style from './style';

const Read = props => {
    if (!props.story) {
        route('/wait', true);
    }
    return (
        <div class={style.profile}>
            <h1>{props.story}</h1>
        </div>
    );
};

export default connect(s => ({story: s.story}))(Read);
