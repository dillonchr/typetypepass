import React from 'react';
import { connect } from 'react-redux';
import Register from './RegisterComponent';
import Read from './ReadStoryComponent';
import Write from './WriteStoryComponent';
import Wait from './WaitComponent';

const Router = props => {
    const getCurrentRoute = () => {
        if (props.needsName) {
            return <Register />;
        }
        if (props.waiting) {
            return <Wait />;
        }
        if (props.story) {
            return <Read story={props.story} onRestart={props.restart} />;
        }
        return <Write />;
    };

    return getCurrentRoute();
};

export default connect(s => ({
    needsName: !s.name,
    waiting: s.waiting,
    story: s.story
}), (d => ({
    restart: () => d({type: 'restart'})
})))(Router);
