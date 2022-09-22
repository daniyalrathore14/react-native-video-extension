import React from 'react';
import { SvgVolumeUp, SvgVolumeOff } from '../icons';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { useInternalCtx } from '../InternalCtx';
const VolumeToggle = ({ style, volumeUpIcon, volumeOffIcon, ...props }) => {
    const { muted, setMuted } = useInternalCtx();
    return (<TouchableOpacity style={StyleSheet.flatten([{ padding: 8 }, style])} {...props} onPress={() => setMuted((m) => !m)}>
      {muted
        ? volumeOffIcon ?? <SvgVolumeOff />
        : volumeUpIcon ?? <SvgVolumeUp />}
    </TouchableOpacity>);
};
export default VolumeToggle;
