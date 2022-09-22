import React, { useEffect } from 'react';
import { Animated, Platform, StyleSheet } from 'react-native';
import { useVideoCtx } from '../ScreenContainer';
import { useOpacity } from '../animation';
import { useInternalCtx } from '../InternalCtx';
const Overlay = ({ children }) => {
    const { consoleHidden, setConsoleHidden, fullscreen } = useVideoCtx();
    const { paused, muted } = useInternalCtx();
    const opacityAnim = useOpacity(consoleHidden);
    useEffect(() => {
        let id;
        if (!consoleHidden && !paused) {
            id = setTimeout(() => setConsoleHidden((bool) => (!bool ? true : bool)), 3000);
        }
        return () => clearTimeout(id);
    }, [consoleHidden, paused, muted, setConsoleHidden, fullscreen]); // when these value change will consider to reset setTimeout
    return (<Animated.View onStartShouldSetResponder={(event) => {
        return event.nativeEvent.touches.length <= 1;
    }} onResponderRelease={() => {
        setConsoleHidden((bool) => !bool);
    }} pointerEvents={consoleHidden ? 'box-only' : 'auto'} style={StyleSheet.flatten([styles.overlay, { opacity: opacityAnim }])}>
      {children}
    </Animated.View>);
};
const styles = StyleSheet.create({
    overlay: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.38)',
        height:Platform.OS === "android"? '105%' : '100%',
        width:Platform.OS === "android"? '103.5%' : '100%'
    },
});
export default Overlay;
