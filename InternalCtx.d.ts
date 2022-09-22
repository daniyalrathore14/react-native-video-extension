import React, { PropsWithChildren } from 'react';
import Video from 'react-native-video';
import { SeekerProps } from './Seeker/Seeker';
declare type InternalCtx = {
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
    paused: boolean;
    setPaused: React.Dispatch<React.SetStateAction<boolean>>;
    videoInstance: React.MutableRefObject<Video | undefined>;
    seekerRef: any;
    forceUpdate: (value: {}) => void;
    mutableState: {
        prevPaused: boolean;
        currentTime: number;
    };
    setState: React.Dispatch<Partial<State>>;
    onSeek: SeekerProps['onSeek'];
} & State;
declare const InternalCtx: React.Context<InternalCtx | undefined>;
declare type State = {
    ended: boolean;
    duration: number;
    bufferTime: number;
};
export declare const useInternalCtx: () => InternalCtx;
export declare type InternalProviderProps = {
    initialPaused?: boolean;
    initialMuted?: boolean;
};
export declare const InternalProvider: ({ initialPaused, initialMuted, children, }: PropsWithChildren<InternalProviderProps>) => JSX.Element;
export {};
