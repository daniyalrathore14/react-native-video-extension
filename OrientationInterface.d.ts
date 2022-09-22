import { FullscreenOrientation, VideoContext } from './ScreenContainer';
export declare type OrientationValue = 'PORTRAIT' | 'LANDSCAPE-LEFT' | 'LANDSCAPE-RIGHT' | 'PORTRAIT-UPSIDEDOWN' | 'FACE-UP' | 'FACE-DOWN' | 'UNKNOWN';
interface Callback {
    (orientation: OrientationValue): void;
}
interface OrientationLib {
    lockToPortrait: () => void;
    getDeviceOrientation: (callback: Callback) => void;
    addDeviceOrientationListener: (callback: Callback) => void;
    removeDeviceOrientationListener: (callback: Callback) => void;
    unlockAllOrientations: () => void;
}
export declare function connectOrientationLib(ExternalOrientation: OrientationLib): void;
declare const useOrientationEffect: ({ fullscreen, setFullscreen, isLandscape, }: {
    fullscreen: VideoContext['fullscreen'];
    setFullscreen: VideoContext['setFullscreen'];
    isLandscape: boolean;
}) => void;
export declare const useDeviceOrientation: () => FullscreenOrientation;
export default useOrientationEffect;
