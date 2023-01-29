import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}
player.on('timeupdate', throttle(stopwatch, 1000))

function stopwatch(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
}