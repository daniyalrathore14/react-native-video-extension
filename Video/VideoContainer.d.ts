import { PropsWithChildren } from 'react';
import { InternalProviderProps } from '../InternalCtx';
import { AspectRatio } from '../utils';
export declare type VideoContainerProps = {
    aspectRatio?: AspectRatio;
    mode: 'auto-fit' | 'contain';
} & InternalProviderProps;
declare const VideoContainer: ({ mode, initialPaused, initialMuted, aspectRatio, children, }: PropsWithChildren<VideoContainerProps>) => JSX.Element;
export default VideoContainer;
