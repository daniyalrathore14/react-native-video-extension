import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { useVideoCtx } from './ScreenContainer';
const InternalCtx = React.createContext(undefined);
export const useInternalCtx = () => {
    const ctx = React.useContext(InternalCtx);
    if (!ctx) {
        throw new Error('Internal Context not found!');
    }
    return ctx;
};
export const InternalProvider = ({ initialPaused = false, initialMuted = false, children, }) => {
    let videoInstance = useRef();
    const { setSeeking } = useVideoCtx();
    const [paused, setPaused] = useState(Platform.OS === "ios" ? true : initialPaused);
    const [muted, setMuted] = useState(initialMuted);
    /* useEffect(() => {
        if (Platform.OS === "ios") {
            setTimeout(() => {
                setPaused(false);
            }, 100)
        }
    },[]) */
    const seekerRef = useRef({}).current;
    const [{ duration, bufferTime, ended }, setState] = useReducer((s, a) => ({ ...s, ...a }), {
        duration: 0,
        bufferTime: 0,
        ended: false,
    });
    const forceUpdate = useState({})[1];
    const mutableState = useRef({
        prevPaused: initialPaused,
        currentTime: 0,
    }).current;
    const value = {
        paused,
        setPaused,
        muted,
        setMuted,
        videoInstance,
        seekerRef,
        duration,
        bufferTime,
        ended,
        setState,
        forceUpdate,
        mutableState,
        onSeek: (data) => {
            if (data.eventName === 'GRANT') {
                mutableState.prevPaused = paused;
                setPaused(true);
                setSeeking(true);
                seekerRef.progressStopped = true;
            }
            if (data.eventName === 'MOVE') {
                mutableState.currentTime = duration * data.ratio;
                forceUpdate({}); // to trigger timer update when dragging thumb
            }
            if (data.eventName === 'RELEASE') {
                videoInstance.current?.seek(duration * data.ratio);
                setPaused(mutableState.prevPaused);
                setSeeking(false);
                setTimeout(() => {
                    // use setTimeout to prevent seeker thumb jumping in case that
                    // RELEASE is called instantly after GRANT
                    // need to use mutable state to check, look at <Video onProgress />
                    seekerRef.progressStopped = false;
                }, 50);
            }
        },
    };
    return <InternalCtx.Provider value={value}>{children}</InternalCtx.Provider>;
};
