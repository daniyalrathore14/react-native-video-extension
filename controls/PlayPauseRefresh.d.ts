import { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
export declare type PlayPauseProps = {
    playIcon?: ReactElement;
    pauseIcon?: ReactElement;
    refreshIcon?: ReactElement;
} & TouchableOpacityProps;
declare const PlayPauseRefresh: ({ style, onPress, playIcon, pauseIcon, refreshIcon, ...props }: PlayPauseProps) => JSX.Element;
export default PlayPauseRefresh;
