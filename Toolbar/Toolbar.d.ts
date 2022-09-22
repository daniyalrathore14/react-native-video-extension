import { PropsWithChildren } from 'react';
import { FlexStyle, ViewProps } from 'react-native';
export declare type ToolbarProps = {
    position: 'top' | 'left' | 'right' | 'bottom' | 'center';
    justify?: FlexStyle['justifyContent'];
} & ViewProps;
declare const Toolbar: ({ children, position, style, justify, }: PropsWithChildren<ToolbarProps>) => JSX.Element;
export default Toolbar;
