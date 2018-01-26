import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';

const Read = props => {
    return (
        <div class={style.profile}>
            <h1>{props.story}</h1>
        </div>
    );
};

export default connect(s => ({story: s.story}))(Read);
