import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
export declare type CenterProps = {
    height?: number;
} & ViewProps;
declare const Center: ({ height, style, ...props }: PropsWithChildren<CenterProps>) => JSX.Element;
export default Center;
