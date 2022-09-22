import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useVideoCtx } from './ScreenContainer';
const FullscreenHidden = ({ children, style, ...props }) => {
    const { fullscreen } = useVideoCtx();
    return (<View style={[fullscreen ? styles.fullscreen : undefined, style]} {...props}>
      {children}
    </View>);
};
const styles = StyleSheet.create({
    fullscreen: {
        overflow: 'hidden',
        height: 0,
        flex: 0,
    },
});
export default FullscreenHidden;
