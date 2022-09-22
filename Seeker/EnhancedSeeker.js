import React from 'react';
import Seeker from './Seeker';
import { useInternalCtx } from '../InternalCtx';
const EnhancedSeeker = ({ mode, ...props }) => {
    const { seekerRef, duration, bufferTime, onSeek } = useInternalCtx();
    return (<Seeker mode={mode} {...props} innerRef={seekerRef} buffer={duration ? bufferTime / duration : 0} onSeek={onSeek}/>);
};
export default EnhancedSeeker;
