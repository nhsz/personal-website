import * as Tone from 'tone';

const playTone = (tone: string): void => {
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now();

  synth.triggerAttackRelease(tone, '8n', now);
};

export { playTone };
