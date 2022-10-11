import { setPushNotificationsEnabled } from 'instabug-reactnative';
import React, { forwardRef, useEffect } from 'react';
import { Platform } from 'react-native';
import Video from 'react-native-video';
import { useInternalCtx } from '../InternalCtx';
import { useVideoCtx } from '../ScreenContainer';
const RNVideo = forwardRef(({ onEnd, onLoad, onProgress, ...props }, ref) => {
    const { videoInstance, setState, mutableState, seekerRef, duration, paused, muted, setPaused } = useInternalCtx();
    const { setIsLandscape, setLoading } = useVideoCtx();


    //setPaused(false);
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
    }} onEnd={() => {
        onEnd?.();
        setState({ ended: true });
    }} onReadyForDisplay={() => {
        console.log('here');
        setLoading(false);
        if(Platform.OS === "android"){
            setPaused(true);
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
            console.log('loading....')
            if(Platform.OS === "android"){
                setPaused(false);
            }
            onLoad?.(data);
            setState({ ended: false, duration: data.duration });
            setIsLandscape(data.naturalSize.orientation === 'landscape');
        }} onProgress={(data) => {
            onProgress?.(data);
            setState({ ended: false, bufferTime: data.playableDuration });
            if (!seekerRef.progressStopped) {
                // console.log('currentTime', data.currentTime);
                mutableState.currentTime = data.currentTime;
                seekerRef.seek?.(data.currentTime / duration);
            }
        }}

        muted={muted}
        paused={paused}
        controls={false}
        
    />);
});
export default RNVideo;
