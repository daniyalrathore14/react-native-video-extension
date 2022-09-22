import { PropsWithChildren } from 'react';
import { TouchableOpacityProps } from 'react-native';
export declare type ForwardProps = PropsWithChildren<TouchableOpacityProps>;
declare const Forward: ({ style, onPress, children, ...props }: ForwardProps) => JSX.Element;
export default Forward;
