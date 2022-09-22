import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { toTimeView } from '../utils';
import { useOpacity } from '../animation';
const Timer = ({ currentTime, duration, hidden, style, ...props }) => {
    const timeOpacity = useOpacity(hidden || false);
    return (<Animated.View style={StyleSheet.flatten([
        styles.seekbarTime,
        style,
        { opacity: timeOpacity },
    ])} {...props}>
      <Text style={styles.time}>{toTimeView(currentTime)}</Text>
      <Text style={StyleSheet.flatten([
        styles.time,
        { color: '#c4c4c4', marginLeft: 5 },
    ])}>
        / {toTimeView(duration)}
      </Text>
    </Animated.View>);
};
const styles = StyleSheet.create({
    seekbarTime: {
        left: 0,
        top: -12,
        position: 'absolute',
        flexDirection: 'row',
    },
    time: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
});
export default Timer;
