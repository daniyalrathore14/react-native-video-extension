import { useEffect, useState } from 'react';
import { OrientationLocker } from './LayoutCalc';
import { Dimensions } from 'react-native';
let OrientationAPI = {
    lockToPortrait: () => { },
    getDeviceOrientation: (callback) => {
        callback('UNKNOWN');
    },
    addDeviceOrientationListener: (callback) => {
        callback('UNKNOWN');
    },
    removeDeviceOrientationListener: (callback) => {
        callback('UNKNOWN');
    },
    unlockAllOrientations: () => { },
};
export function connectOrientationLib(ExternalOrientation) {
    OrientationLocker.isPortraitLocked = true;
    OrientationAPI = ExternalOrientation;
}
const useOrientationEffect = ({ fullscreen, setFullscreen, isLandscape, }) => {
    let Orientation = OrientationAPI;
    useEffect(() => {
        Orientation.lockToPortrait();
        return () => {
            Orientation.unlockAllOrientations();
        };
    }, [Orientation]);
    useEffect(() => {
        function handleOrientation(orientation) {
            if (OrientationLocker.isPortraitLocked) {
                if (fullscreen && orientation === 'PORTRAIT') {
                    setFullscreen(false);
                }
                if (orientation === 'LANDSCAPE-LEFT' ||
                    orientation === 'LANDSCAPE-RIGHT') {
                    setFullscreen(orientation);
                }
                else {
                    setFullscreen(false);
                }
            }
        }
        Orientation.addDeviceOrientationListener(handleOrientation);
        return () => {
            Orientation.removeDeviceOrientationListener(handleOrientation);
        };
    }, [Orientation, isLandscape, fullscreen, setFullscreen]);
    useEffect(() => {
        function handleOrientation({ screen: { width, height }, }) {
            if (!OrientationLocker.isPortraitLocked) {
                setFullscreen(width > height ? 'LANDSCAPE-LEFT' : false);
            }
        }
        const subribeEvent = Dimensions.addEventListener('change', handleOrientation);
        return () => {
            subribeEvent.remove()
        };
    }, [setFullscreen]);
};
export const useDeviceOrientation = () => {
    let Orientation = OrientationAPI;
    const [deviceOrientation, setDeviceOrientation,] = useState('PORTRAIT');
    useEffect(() => {
        function handleOrientation(orientation) {
            if (OrientationLocker.isPortraitLocked) {
                if (orientation === 'LANDSCAPE-LEFT' ||
                    orientation === 'LANDSCAPE-RIGHT') {
                    setDeviceOrientation(orientation);
                }
                else {
                    setDeviceOrientation('PORTRAIT');
                }
            }
        }
        Orientation.addDeviceOrientationListener(handleOrientation);
        return () => {
            Orientation.removeDeviceOrientationListener(handleOrientation);
        };
    }, [Orientation]);
    useEffect(() => {
        function handleOrientation({ screen: { width, height }, }) {
            if (!OrientationLocker.isPortraitLocked) {
                setDeviceOrientation(width > height ? 'LANDSCAPE-LEFT' : 'PORTRAIT');
            }
        }
        const subsriptionEvent = Dimensions.addEventListener('change', handleOrientation);
        return () => {
            subsriptionEvent.remove()
        };
    }, []);
    return deviceOrientation;
};
export default useOrientationEffect;
