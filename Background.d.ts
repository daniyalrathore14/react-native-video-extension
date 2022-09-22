import React from 'react';
import { ViewProps } from 'react-native';
export declare type BackgroundProps = {
    fullscreen?: boolean;
    children?: React.ReactNode;
} & ViewProps;
declare const Background: ({ fullscreen, children, style, ...props }: BackgroundProps) => JSX.Element;
export default Background;
