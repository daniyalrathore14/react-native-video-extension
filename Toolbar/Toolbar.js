import React from 'react';
import { StyleSheet, View } from 'react-native';
const FlexDirection = {
    top: 'row',
    left: 'column',
    right: 'column',
    bottom: 'row',
    center: 'row',
};
const Layout = {
    top: {
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    left: {
        left: 0,
        top: 0,
        bottom: 0,
        alignItems: 'flex-start',
    },
    right: {
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'flex-end',
    },
    bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
    },
};
const Toolbar = ({ children, position, style, justify, }) => {
    return (<View style={StyleSheet.flatten([
        {
            position: 'absolute',
            flexDirection: FlexDirection[position],
            padding: 16,
            justifyContent: justify,
            ...Layout[position],
        },
        style,
    ])}>
      {children}
    </View>);
};
export default Toolbar;
