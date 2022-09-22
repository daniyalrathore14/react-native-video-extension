import { Animated } from 'react-native';
import { VideoContext } from './ScreenContainer';
export declare const useScaleSpring: (hidden: boolean) => Animated.Value;
export declare const useOpacity: (hidden: boolean) => Animated.Value;
export declare const useAnimatedFullscreen: (fullscreen: VideoContext['fullscreen'], isLandscape: boolean) => {
    staticTransform: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
    animatedTransform: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
    fullscreenSize: {
        width: number;
        height: number;
    };
    animatedOpacity: {
        opacity: Animated.Value;
    };
};
