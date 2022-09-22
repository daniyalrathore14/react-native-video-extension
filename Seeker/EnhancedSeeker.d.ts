import { PropsWithChildren } from 'react';
import { SeekerProps } from './Seeker';
export declare type EnhancedSeekerProps = {
    mode: 'auto-fit' | 'contain';
} & SeekerProps;
declare const EnhancedSeeker: ({ mode, ...props }: PropsWithChildren<EnhancedSeekerProps>) => JSX.Element;
export default EnhancedSeeker;
