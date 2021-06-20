import click from '../audio/mixkit-fast-double-click-on-mouse-275.wav';
import closeClick from '../audio/mixkit-mouse-click-close-1113.wav';
import typeClick from '../audio/mixkit-typewriter-soft-click-1125.wav';
import bubbleClick from '../audio/mixkit-plastic-bubble-click-1124.wav';

function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
}

export default function clickSound() {
  const audio = new Audio(click);
  audio.play();
}

export const closeClickSound = () => playSound(closeClick);
export const typeClickkSound = () => playSound(typeClick);
export const bubbleClickSound = () => playSound(bubbleClick);
