import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useInternalCtx } from '../InternalCtx';
import { useVideoCtx } from '../ScreenContainer';
import { SvgPause, SvgPlayArrow, SvgRefresh } from '../icons';
const PlayPauseRefresh = ({ style, onPress, autoPlay, playIcon, pauseIcon, refreshIcon, callback, ...props }) => {
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
    </TouchableOpacity>) : (<TouchableOpacity style={calculatedStyle} onPress={() => {
        setPaused((bool) => !bool)
        callback && callback()
    }}>
        <>
            {
                Platform.OS === 'ios' ?
                    ((!autoPlay && paused) || (autoPlay && !paused) ? playIcon ?? <SvgPlayArrow /> : pauseIcon ?? <SvgPause />) :
                    !autoPlay ? (
                        paused ? playIcon ?? <SvgPlayArrow /> : pauseIcon ?? <SvgPause />
                    ) :
                        (
                            paused ? playIcon ?? <SvgPlayArrow /> : pauseIcon ?? <SvgPause />
                        )
            }

        </>
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
