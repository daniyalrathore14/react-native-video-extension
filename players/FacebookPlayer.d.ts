import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native'
import Video from 'react-native-video';
import { AspectRatio } from '../utils';
import { RNVideoProps } from '../Video/RNVideo';
import { FullscreenOrientation } from '../ScreenContainer';
import { IconConfig } from '../icons';
export declare type FacebookPlayerProps = {
    initialPaused?: boolean;
    initialMuted?: boolean;
    videoPoster?: string;
    aspectRatio?: AspectRatio;
    mode: 'auto-fit' | 'contain';
    customIcon?: IconConfig;
    renderToolbar?: (fullscreen: false | FullscreenOrientation) => ReactNode;
    progressStyle?: ViewStyle,
    callback?: () => void
} & RNVideoProps;
declare const _default: {
    (props: {
        progressStyle?,
        initialPaused?: boolean | undefined;
        initialMuted?: boolean | undefined;
        aspectRatio?: number | "landscape" | "portrait" | undefined;
        mode: "auto-fit" | "contain";
        renderCustomButtons?: undefined | ViewStyle;
        customIcon?: Partial<Record<"fullscreenIcon" | "exitFullscreenIcon" | "playIcon" | "pauseIcon" | "replayIcon" | "forwardIcon" | "refreshIcon" | "volumeOffIcon" | "volumeUpIcon", React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>>> | undefined;
        renderToolbar?: ((fullscreen: false | "LANDSCAPE-LEFT" | "LANDSCAPE-RIGHT" | "PORTRAIT") => React.ReactNode) | undefined;
    } & Pick<import("react-native-video").VideoProperties, "fullscreen" | "style" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "source" | "filter" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "onSeek" | "filterEnable" | "src" | "seek" | "fullscreenOrientation" | "fullscreenAutorotate" | "onVideoLoadStart" | "onVideoLoad" | "onVideoBuffer" | "onVideoError" | "onVideoProgress" | "onVideoSeek" | "onVideoEnd" | "onTimedMetadata" | "onVideoFullscreenPlayerWillPresent" | "onVideoFullscreenPlayerDidPresent" | "onVideoFullscreenPlayerWillDismiss" | "onVideoFullscreenPlayerDidDismiss" | "minLoadRetryCount" | "maxBitRate" | "posterResizeMode" | "poster" | "repeat" | "automaticallyWaitsToMinimizeStalling" | "volume" | "bufferConfig" | "stereoPan" | "rate" | "pictureInPicture" | "playInBackground" | "playWhenInactive" | "ignoreSilentSwitch" | "reportBandwidth" | "disableFocus" | "currentTime" | "progressUpdateInterval" | "useTextureView" | "hideShutterView" | "allowsExternalPlayback" | "audioOnly" | "preventsDisplaySleepDuringVideoPlayback" | "onLoadStart" | "onLoad" | "onBuffer" | "onError" | "onProgress" | "onBandwidthUpdate" | "onEnd" | "onFullscreenPlayerWillPresent" | "onFullscreenPlayerDidPresent" | "onFullscreenPlayerWillDismiss" | "onFullscreenPlayerDidDismiss" | "onReadyForDisplay" | "onPlaybackStalled" | "onPlaybackResume" | "onPlaybackRateChange" | "onAudioFocusChanged" | "onAudioBecomingNoisy" | "onPictureInPictureStatusChanged" | "onRestoreUserInterfaceForPictureInPictureStop" | "onExternalPlaybackChange" | "selectedAudioTrack" | "selectedTextTrack" | "selectedVideoTrack" | "textTracks"> & React.RefAttributes<Video>): JSX.Element;
    displayName: string;
    videoPoster: string;
};
export default _default;
