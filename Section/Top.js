import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
const Top = ({ height = 80, style, ...props }) => (<View style={StyleSheet.flatten([
    styles.root,
    style,
    {
        height,
        transform: [
            { translateY: -height / 2 },
            ...((style && 'transform' in style ? style?.transform : []) ?? []),
        ],
    },
])} {...props} />);
const styles = StyleSheet.create({
    root: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        top: Platform.OS === 'android' ? '8%' : '12%',
    },
});
export default Top;
