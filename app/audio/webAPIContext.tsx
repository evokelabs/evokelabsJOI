export const audioContext = typeof window !== 'undefined' && window.AudioContext ? new AudioContext() : null
