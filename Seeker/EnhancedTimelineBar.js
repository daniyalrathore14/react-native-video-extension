import React from 'react';
import TimelineBar from './TimelineBar';
import { useInternalCtx } from '../InternalCtx';
const EnhancedTimelineBar = (props) => {
    const { duration, bufferTime } = useInternalCtx();
    return (<TimelineBar {...props} buffer={duration ? bufferTime / duration : 0}/>);
};
export default EnhancedTimelineBar;
