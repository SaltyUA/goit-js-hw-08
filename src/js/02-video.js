import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`);
const player = new Player(iframe);

player.on(`timeupdate`, throttle(currentTime, 1000));

function currentTime(timeupdate) {
  localStorage.setItem('videoplayer-current-time', timeupdate.seconds);
  console.log(localStorage.getItem(`videoplayer-current-time`));
}

player.ready().then(setTime => {
  player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`));
});
