import { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
export declare type PlayPauseProps = {
    playIcon?: ReactElement;
    pauseIcon?: ReactElement;
    refreshIcon?: ReactElement;
    callback?: () => void
} & TouchableOpacityProps;
declare const PlayPauseRefresh: ({ style, onPress, playIcon, pauseIcon, refreshIcon, callback, ...props }: PlayPauseProps) => JSX.Element;
export default PlayPauseRefresh;
