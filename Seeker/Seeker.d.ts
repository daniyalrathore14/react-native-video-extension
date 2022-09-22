import React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
export declare type SeekerEventData = {
    eventName: 'GRANT' | 'MOVE' | 'RELEASE';
    x: number;
    width: number;
    ratio: number;
};
export declare type SeekerProps = {
    mode: 'auto-fit' | 'contain';
    config?: Partial<{
        filledColor?: string;
        buttonColor?: string;
        thumbSize?: number;
        barHeight?: number;
        initialButtonSize?: number;
        touchedButtonSize?: number;
    }>;
    buffer?: number;
    thumbHidden?: boolean;
    onSeek?: (data: SeekerEventData) => void;
    innerRef?: any;
    progressObserver?: Animated.Value;
    styles?: Partial<{
        seeker: StyleProp<ViewStyle>;
        duration: StyleProp<ViewStyle>;
        buffer: StyleProp<ViewStyle>;
        played: StyleProp<ViewStyle>;
        thumb: StyleProp<ViewStyle>;
        innerThumb: StyleProp<ViewStyle>;
    }>;
};
export declare const SNAP_BOTTOM: number;
/**
 * Note: Seeker's width should not changed when seeking, be careful!
 */
declare const Seeker: ({ mode, thumbHidden, config, buffer, onSeek, children, progressObserver, innerRef, styles, }: React.PropsWithChildren<SeekerProps>) => JSX.Element;
export default Seeker;
