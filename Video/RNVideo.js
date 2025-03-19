import React, { forwardRef, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import Video from 'react-native-video';
import { useInternalCtx } from '../InternalCtx';
import { useVideoCtx } from '../ScreenContainer';
const RNVideo = forwardRef(({ jumpToDuration, aspectRatio,
    onEnd, onLoad, autoPlay, onProgress, ...props }, ref) => {
    const { videoInstance, setState, mutableState, seekerRef, duration, paused, muted, setPaused } = useInternalCtx();
    const { setIsLandscape, setLoading } = useVideoCtx();
    const instanceRef = useRef(0);
    const mainVideoRef = useRef(null);
    useEffect(() => {
        if (mainVideoRef.current && jumpToDuration) {
            mainVideoRef.current.seek(jumpToDuration)
        }
    }, [mainVideoRef, jumpToDuration])
    return (<Video {...props} ref={(videoRef) => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(videoRef);
            }
            else {
                ref.current = videoRef;
            }
        }
        if (videoRef) {
            videoInstance.current = videoRef;
        }
        mainVideoRef.current = videoRef
    }} onEnd={() => {
        onEnd?.();
        setState({ ended: true })

    }} onReadyForDisplay={() => {
        setLoading(false);
        if (Platform.OS === "android" && instanceRef?.current == 0) {
            setPaused(true);
            if (autoPlay) {
                setTimeout(() => {
                    setPaused(false)
                }, 1000);
            }
            instanceRef.current++
        }
        /*  if (Platform.OS === "android") {
             setLoading(false);
         }
         else {
             setTimeout(() => {
                 setLoading(false);
                 //setPaused(false);
             }, 500)
         } */

    }}
        onLoad={(data) => {
            if (Platform.OS === "android") {
                setPaused(false);
            }
            onLoad?.(data);
            setState({ ended: false, duration: data.duration });
            setIsLandscape(aspectRatio === 'landscape' ? 'landscape' : 'portrait');
        }} onProgress={(data) => {
            onProgress?.(data);
            setState({ ended: false, bufferTime: data.playableDuration });
            if (!seekerRef.progressStopped) {
                mutableState.currentTime = data.currentTime;
                seekerRef.seek?.(data.currentTime / duration);
            }
        }}

        muted={muted}
        paused={(Platform.OS === 'android' && !autoPlay) ? paused : !autoPlay ? paused : (Platform.OS === 'ios' && autoPlay) ? !paused : paused}
        controls={false}

    />);
});
export default RNVideo;
