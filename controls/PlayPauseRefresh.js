import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { SvgPause, SvgPlayArrow, SvgRefresh } from '../icons';
import { useVideoCtx } from '../ScreenContainer';
import { useInternalCtx } from '../InternalCtx';
const PlayPauseRefresh = ({ style, onPress, playIcon, pauseIcon, refreshIcon, ...props }) => {
    const { fullscreen, isLandscape } = useVideoCtx();
    const { videoInstance, ended, setState, paused, setPaused, } = useInternalCtx();
    const buttonStyle = fullscreen
        ? isLandscape
            ? styles.playFullscreenLandscape
            : styles.playFullscreenPortrait
        : styles.play;
    const calculatedStyle = StyleSheet.flatten([buttonStyle, style]);
    return ended ? (<TouchableOpacity onPress={(e) => {
        onPress?.(e);
        videoInstance.current?.seek(0);
        setState({ ended: false });
    }} style={calculatedStyle} {...props}>
      {refreshIcon ?? <SvgRefresh />}
    </TouchableOpacity>) : (<TouchableOpacity style={calculatedStyle} onPress={() => setPaused((bool) => !bool)}>
      {paused ? playIcon ?? <SvgPlayArrow /> : pauseIcon ?? <SvgPause />}
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    play: {
        marginHorizontal: 48,
    },
    playFullscreenPortrait: {
        marginHorizontal: '12%',
    },
    playFullscreenLandscape: {
        marginHorizontal: '24%',
    },
});
export default PlayPauseRefresh;
