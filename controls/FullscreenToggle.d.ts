import React from 'react';
import { TouchableOpacityProps } from 'react-native';
export declare type FullscreenToggleProps = {
    fullscreenIcon?: React.ReactElement;
    exitFullscreenIcon?: React.ReactElement;
} & TouchableOpacityProps;
declare const FullscreenToggle: ({ style, fullscreenIcon, exitFullscreenIcon, ...props }: FullscreenToggleProps) => JSX.Element;
export default FullscreenToggle;
