import { tones } from '../data';

const getRandomTone = (): string => {
  return tones[Math.floor(Math.random() * tones.length)];
};

export { getRandomTone };
