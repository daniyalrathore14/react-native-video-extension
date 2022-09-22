import { ViewStyle } from 'react-native';
import { OrientationValue } from './OrientationInterface';
declare type Data = {
    deviceWidth: number;
    deviceHeight: number;
    isPortraitLocked: boolean;
    isLandscapeDevice: boolean;
    insets: Partial<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
};
export declare type LayoutData = {
    isPortraitLocked: boolean;
    isLandscapeDevice: boolean;
    isLandscapeVideo: boolean;
    insets?: Partial<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
    deviceOrientation?: OrientationValue;
};
export declare const getCanvasContainSize: (data: Data) => {
    width: number;
    height: number;
};
export declare const getCanvasAutoFitSize: (data: Data & {
    isLandscapeVideo: boolean;
}) => {
    width: number;
    height: number;
};
export declare const getCanvasContainRotation: (data: {
    isPortraitLocked: boolean;
    deviceOrientation?: OrientationValue;
}) => 0 | 90 | -90;
export declare const getCanvasAutoFitRotation: (data: {
    isPortraitLocked: boolean;
    isLandscapeDevice: boolean;
    isLandscapeVideo: boolean;
    deviceOrientation?: OrientationValue;
}) => 0 | 90 | -90;
export declare const Device: (isPortraitLocked?: boolean) => readonly [number, number] | readonly [number, number, "PORTRAIT" | "LANDSCAPE"];
export declare const getAutoFitCanvasLayout: (data: LayoutData) => ViewStyle;
export declare const getContainCanvasLayout: (data: LayoutData) => ViewStyle;
export {};
