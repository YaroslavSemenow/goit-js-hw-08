import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        localStorage.setItem(STORAGE_KEY, seconds);
      })
      .catch(function (error) {});
  }, 1000),
);

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
