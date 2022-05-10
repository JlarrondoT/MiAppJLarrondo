import SoundPlayer from 'react-native-sound-player';

export const Player = {
  play: (inputUrl: string) => {
    try {
      SoundPlayer.playUrl(inputUrl);
    } catch (e) {
      console.log('cannot play the song file', e);
    }
  },

  pause: () => {
    // You need the keyword `async`
    try {
      SoundPlayer.pause();
      console.log('paused');
    } catch (e) {
      console.log('There is no song playing', e);
    }
  },
  resume: () => {
    try {
      SoundPlayer.resume();
      console.log('resumed');
    } catch (e) {
      console.log('There is no song playing', e);
    }
  },
};

export default Player;
