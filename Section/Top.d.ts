import { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native';
export declare type CenterProps = {
    height?: number;
} & ViewProps;
declare const Top: ({ height, style, ...props }: PropsWithChildren<CenterProps>) => JSX.Element;
export default Top;
