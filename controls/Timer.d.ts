import { ViewProps } from 'react-native';
export declare type TimerProps = {
    currentTime: number;
    duration: number;
    hidden?: boolean;
} & ViewProps;
declare const Timer: ({ currentTime, duration, hidden, style, ...props }: TimerProps) => JSX.Element;
export default Timer;
