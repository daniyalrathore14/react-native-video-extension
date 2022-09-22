import { PropsWithChildren } from 'react';
import { TextProps as RNTextProps } from 'react-native';
export declare type TextProps = {
    dim?: boolean;
} & RNTextProps;
declare const Text: ({ dim, style, ...props }: PropsWithChildren<TextProps>) => JSX.Element;
export default Text;
