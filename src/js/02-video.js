import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
    iframe: document.querySelector('iframe'),
  };

  const player = new Player(refs.iframe); 

  player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  const pauseTime = event.seconds;
  localStorage.setItem('video-pause-time', pauseTime);
}
function getTime() {
  const savedTime = localStorage.getItem('video-pause-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
}
getTime();


