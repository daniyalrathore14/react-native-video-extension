import { Animated, StyleProp, ViewStyle } from 'react-native';
export declare type TimelineBarProps = {
    barHeight?: number;
    buffer?: number;
    filledColor?: string;
    progress?: ViewStyle['width'] | Animated.Value;
    styles?: Partial<{
        duration: StyleProp<ViewStyle>;
        buffer: StyleProp<ViewStyle>;
        played: StyleProp<ViewStyle>;
    }>;
};
declare const TimelineBar: ({ barHeight, buffer, filledColor, progress, styles, }: TimelineBarProps) => JSX.Element;
export default TimelineBar;
