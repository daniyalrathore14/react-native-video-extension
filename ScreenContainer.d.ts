import React from 'react';
export declare type FullscreenOrientation = 'LANDSCAPE-LEFT' | 'LANDSCAPE-RIGHT' | 'PORTRAIT';
export interface VideoContext {
    fullscreen: FullscreenOrientation | false;
    enterFullscreen: () => void;
    exitFullscreen: () => void;
    setFullscreen: React.Dispatch<React.SetStateAction<VideoContext['fullscreen']>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    seeking: boolean;
    setSeeking: React.Dispatch<React.SetStateAction<boolean>>;
    consoleHidden: boolean;
    setConsoleHidden: React.Dispatch<React.SetStateAction<boolean>>;
    isLandscape: boolean;
    setIsLandscape: React.Dispatch<React.SetStateAction<boolean>>;
    config: {
        thumbRadius: number;
        thumbTouchedRadius: number;
        seekerColor: string;
        seekerThickness: number;
        seekerFullscreenThickness: number;
    };
}
export declare const ctx: React.Context<VideoContext | undefined>;
export declare const useVideoCtx: () => VideoContext;
export declare type ScreenContainerProps = {
    children: React.ConsumerProps<VideoContext>['children'] | React.ReactNode;
    config?: Partial<VideoContext['config']>;
};
declare const ScreenContainer: ({ children, config }: ScreenContainerProps) => JSX.Element;
export default ScreenContainer;
