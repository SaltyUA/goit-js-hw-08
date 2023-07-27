import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`) || 0);

player.on(`timeupdate`, throttle(currentTime, 1000));

function currentTime(timeupdate) {
  localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
}
