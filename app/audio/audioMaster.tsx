import { sfx, rain, music, CYBERPUNK_AMBIENCE_FADE_IN, MUSIC_START_FADE_IN, MUSIC_LOOP_FADE_IN, MUSIC_LOOP_DELAY } from './audioFiles'

let audioContext: AudioContext | undefined
if (typeof window !== 'undefined') {
  audioContext = new window.AudioContext()
}

export const playAudio = (audioBuffer: AudioBuffer) => {
  if (audioContext) {
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioContext.destination)
    source.start()
  }
}

export const pauseAudio = (source: AudioBufferSourceNode) => {
  source.stop()
}

export const loopAudio = (audioBuffer: AudioBuffer) => {
  if (audioContext) {
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.loop = true
    source.connect(audioContext.destination)
    source.start()
  }
}
