import React, { useEffect, useState } from 'react';
import useOrientationEffect, { useDeviceOrientation, } from './OrientationInterface';
import { StatusBar } from 'react-native';
export const ctx = React.createContext(undefined);
export const useVideoCtx = () => {
    const value = React.useContext(ctx);
    if (!value) {
        throw new Error('You need to wrap <VideoPlayer /> with <ScreenContainer />!');
    }
    return value;
};
const isValidConsumer = (children) => {
    return typeof children === 'function';
};
const ScreenContainer = ({ children, config = {} }) => {
    const [fullscreen, setFullscreen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [seeking, setSeeking] = useState(false);
    const [consoleHidden, setConsoleHidden] = useState(false);
    const [isLandscape, setIsLandscape] = useState(true);
    const deviceOrientation = useDeviceOrientation();
    useOrientationEffect({
        fullscreen,
        setFullscreen,
        isLandscape,
    });
    /* useEffect(() => {
        if (fullscreen) {
            //StatusBar.setHidden(true);
        }
        else {
            StatusBar.setHidden(false);
        }
    }, [fullscreen]); */
    return (<ctx.Provider value={{
        fullscreen,
        setFullscreen,
        enterFullscreen: () => setFullscreen(deviceOrientation),
        exitFullscreen: () => setFullscreen(false),
        isLandscape,
        setIsLandscape,
        loading,
        setLoading,
        seeking,
        setSeeking,
        consoleHidden,
        setConsoleHidden,
        config: {
            thumbRadius: config?.thumbRadius ?? 8,
            thumbTouchedRadius: config?.thumbTouchedRadius ?? 12,
            seekerColor: config?.seekerColor ?? '#ff2525',
            seekerThickness: config?.seekerThickness ?? 2,
            seekerFullscreenThickness: config?.seekerFullscreenThickness ?? 4,
        },
    }}>
      {isValidConsumer(children) ? (<ctx.Consumer>{children}</ctx.Consumer>) : (children)}
    </ctx.Provider>);
};
export default ScreenContainer;
