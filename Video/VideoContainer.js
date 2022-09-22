import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { useVideoCtx } from '../ScreenContainer';
import { InternalProvider } from '../InternalCtx';
import useInsets from '../InsetInterface';
import { useDeviceOrientation } from '../OrientationInterface';
import { getAutoFitCanvasLayout, getContainCanvasLayout, } from '../LayoutUtil';
import { OrientationLocker } from '../LayoutCalc';
import { getAspectRatio } from '../utils';
const VideoContainer = ({ mode, initialPaused = false, initialMuted = false, aspectRatio = 16 / 9, children, }) => {
    const { fullscreen, isLandscape, loading } = useVideoCtx();
    const insets = useInsets();
    const deviceOrientation = useDeviceOrientation();
    const getLayoutStyle = {
        'auto-fit': getAutoFitCanvasLayout,
        contain: getContainCanvasLayout,
    };
    const fullscreenData = {
        isPortraitLocked: OrientationLocker.isPortraitLocked,
        isLandscapeVideo: isLandscape,
        isLandscapeDevice: deviceOrientation.startsWith('LANDSCAPE'),
        deviceOrientation,
        insets,
    };
    const normalStyle = {
        width: '100%',
        height: undefined,
        aspectRatio: getAspectRatio(aspectRatio),
    };
    const fullscreenStyle = getLayoutStyle[mode]?.(fullscreenData);
    return (<InternalProvider initialPaused={initialPaused} initialMuted={initialMuted}>
        <View style={StyleSheet.flatten([
            styles.container,
            fullscreen ? styles.fullscreenContainer : styles.fullscreenContainer,
            //fullscreen ? styles.fullscreenContainer : styles.initialContainer,
        ])}>
            <View
                style={fullscreen ? fullscreenStyle : fullscreenStyle}
                //style={fullscreen ? fullscreenStyle : normalStyle}
            >
                {children}
            </View>
            {loading && (<View style={StyleSheet.flatten([
                styles.fullscreenContainer,
                styles.loadingContainer,
            ])}>
                <ActivityIndicator color="#fff" size={"large"} />
            </View>)}
        </View>
    </InternalProvider>);
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        zIndex: 1000,
    },
    initialContainer: {
        width: '100%',
    },
    fullscreenContainer: {
        position: 'absolute',
        zIndex: 1000000,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: Dimensions.get('window').height
        //height: Dimensions.get('window').height+60
        //height: Dimensions.get('window').height+60
    },
    loadingContainer: {
        backgroundColor: '#EFD046',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default VideoContainer;
