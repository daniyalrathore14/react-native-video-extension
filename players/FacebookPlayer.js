import React, { forwardRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import withDefaultScreenContainer from '../DefaultScreenContainer';
import { toTimeView } from '../utils';
import Overlay from '../controls/Overlay';
import EnhancedSeeker from '../Seeker/EnhancedSeeker';
import Center from '../Section/Center';
import FullscreenToggle from '../controls/FullscreenToggle';
import PlayPauseRefresh from '../controls/PlayPauseRefresh';
import Replay from '../controls/Replay';
import Forward from '../controls/Forward';
import RNVideo from '../Video/RNVideo';
import VideoContainer from '../Video/VideoContainer';
import { useInternalCtx } from '../InternalCtx';
import Text from '../controls/Text';
import VolumeToggle from '../controls/VolumeToggle';
import { useVideoCtx } from '../ScreenContainer';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const TimePlayed = () => {
  const { mutableState } = useInternalCtx();
  return (<Text style={{ width: 80 }}>{toTimeView(mutableState.currentTime)}</Text>);
};
const Poster = ({ videoPoster }) => {
  const { paused, mutableState } = useInternalCtx();
  return (
    (paused && mutableState.currentTime <= 0.1) &&
    <FastImage
      source={{
        //uri: "https://miraclemorning-media.s3.amazonaws.com/images/thumbnail/Rennee.jpg"
        uri: videoPoster
      }}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        //zIndex: 9999999,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  );
};
const TimeLeft = () => {
  const { mutableState, duration } = useInternalCtx();
  return (<Text style={{ width: 80 }}>
    -{toTimeView(duration - mutableState.currentTime)}
  </Text>);
};
const FacebookPlayer = forwardRef(({ mode, initialPaused = false, autoPlay = false, initialMuted = false, aspectRatio = 'landscape', customIcon, renderToolbar, videoPoster, ...props }, ref) => {
  const { fullscreen } = useVideoCtx();
  console.log(props, 'propspropsprops');
  return (<VideoContainer mode={mode} aspectRatio={aspectRatio} initialPaused={initialPaused} initialMuted={initialMuted}>

    <RNVideo /* style={{ width: '100%', height: '100%' }} */ autoPlay={autoPlay}  {...props} ref={ref} />
    <Poster videoPoster={videoPoster} />
    <Overlay>
      <Center>
        <Replay>{customIcon?.replayIcon}</Replay>
        <PlayPauseRefresh autoPlay={autoPlay} {...customIcon} />
        <Forward>{customIcon?.forwardIcon}</Forward>
      </Center>
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        {renderToolbar?.(fullscreen)}
        <View style={{ flex: 1 }} />
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: fullscreen ? 30 : 30,
        }}>
          <TimePlayed />
          <EnhancedSeeker mode={mode} config={{
            buttonColor: '#fff',
            filledColor: '#1877f2',
            barHeight: 4,
            initialButtonSize: 18,
            touchedButtonSize: 18,
          }} styles={{
            seeker: { flex: 1 },
            buffer: { borderRadius: 10 },
            duration: { borderRadius: 10 },
            played: { borderRadius: 10 },
          }} />
          <TimeLeft />
          <VolumeToggle {...customIcon} />
          <FullscreenToggle {...customIcon} />
        </View>
      </View>
    </Overlay>
  </VideoContainer>);
});
export default withDefaultScreenContainer(FacebookPlayer);
