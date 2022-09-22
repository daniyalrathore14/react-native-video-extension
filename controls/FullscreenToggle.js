import React from 'react';
import { SvgExitFullscreen, SvgFullscreen } from '../icons';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { useVideoCtx } from '../ScreenContainer';
const FullscreenToggle = ({ style, fullscreenIcon, exitFullscreenIcon, ...props }) => {
    const { fullscreen, enterFullscreen, exitFullscreen } = useVideoCtx();
    return (<TouchableOpacity style={StyleSheet.flatten([{ padding: 16 }, style])} {...props} onPress={fullscreen ? exitFullscreen : enterFullscreen}>
      {fullscreen
        ? exitFullscreenIcon ?? <SvgExitFullscreen />
        : fullscreenIcon ?? <SvgFullscreen />}
    </TouchableOpacity>);
};
export default FullscreenToggle;
