import { AspectRatio } from './utils';
import { VideoContext } from './ScreenContainer';
interface WindowDimension {
    width: number;
    height: number;
}
export interface Inset {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
declare type Info = {
    insets?: Inset;
    fullscreen: boolean;
    isLandscape: boolean;
};
export declare const OrientationLocker: {
    isPortraitLocked: boolean;
};
export declare const Device: ({ width, height }: WindowDimension) => {
    width: number;
    height: number;
};
export declare const Gap: ({ insets, fullscreen, isLandscape }: Info) => {
    left: number;
    right: number;
    top: number;
    bottom: number;
};
export declare const getPlayerWidth: (windowSize: WindowDimension, info: Info) => number;
export declare const getPlayerHeight: (windowSize: WindowDimension, info: Info & {
    aspectRatio: AspectRatio;
}) => number;
export declare const getPlayerSize: (windowSize: WindowDimension, info: Info & {
    aspectRatio: AspectRatio;
}) => {
    marginTop: number;
    marginLeft: number;
    width: number;
    height: number;
} | {
    marginTop?: undefined;
    marginLeft?: undefined;
    width: number;
    height: number;
};
export declare const getPlayerMargin: (windowSize: WindowDimension, info: Info) => {
    marginTop: number;
    marginLeft: number;
} | {
    marginTop?: undefined;
    marginLeft?: undefined;
};
export declare const getPlayerRotationDegree: (windowSize: WindowDimension, info: {
    isLandscape: boolean;
    fullscreen: VideoContext['fullscreen'];
}) => 0 | 90 | -90;
export declare const getPlayerTranslate2D: (windowSize: WindowDimension, info: Pick<Info, 'fullscreen' | 'isLandscape'>) => ({
    translateY: number;
    translateX?: undefined;
} | {
    translateX: number;
    translateY?: undefined;
})[];
export declare const getAutoFitSeekDiff: (fullscreen: boolean, isLandscapeVideo: boolean) => "dy" | "dx";
export declare const getContainSeekDiff: (fullscreen: VideoContext['fullscreen']) => "dy" | "dx";
export declare const getExitFullscreenOffset: (isLandscape: boolean, insets?: Inset | undefined) => {
    bottom: number;
    right: number;
} | {
    bottom: number;
    right: string;
};
export {};
