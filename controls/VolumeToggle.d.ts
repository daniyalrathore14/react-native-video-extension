import { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
export declare type VolumeToggleProps = {
    volumeUpIcon?: ReactElement;
    volumeOffIcon?: ReactElement;
} & TouchableOpacityProps;
declare const VolumeToggle: ({ style, volumeUpIcon, volumeOffIcon, ...props }: VolumeToggleProps) => JSX.Element;
export default VolumeToggle;
