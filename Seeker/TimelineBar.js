import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
const BAR_HEIGHT = 2;
const DEFAULT_COLOR = '#ff2525';
const TimelineBar = ({ barHeight = BAR_HEIGHT, buffer = 0, filledColor = DEFAULT_COLOR, progress = 0, styles, }) => (<>
    <View testID="seeker_duration" style={StyleSheet.flatten([
    staticStyles.duration,
    styles?.duration,
    { height: barHeight },
])}/>
    <View testID="seeker_buffer" style={StyleSheet.flatten([
    staticStyles.buffer,
    styles?.buffer,
    {
        width: `${buffer * 100}%`,
        height: barHeight,
    },
])}/>
    <Animated.View testID="seeker_played" style={StyleSheet.flatten([
    staticStyles.played,
    { backgroundColor: filledColor },
    styles?.played,
    {
        height: barHeight,
        width: progress,
    },
])}/>
  </>);
const staticStyles = StyleSheet.create({
    duration: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.38)',
    },
    buffer: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.38)',
    },
    played: {
        position: 'absolute',
        left: 0,
    },
});
export default TimelineBar;
