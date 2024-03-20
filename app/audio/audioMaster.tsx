import { sfx, rain, music} from './audioFiles'

let audioContext: AudioContext | undefined
if (typeof window !== 'undefined') {
  audioContext = new window.AudioContext()
}

export const loadAudio = async (url: string) => {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await audioContext?.decodeAudioData(arrayBuffer)
  return audioBuffer
}

export const playAudio = (audioBuffer: AudioBuffer, volume: number, loop: boolean = false) => {
  if (audioContext) {
    const source = audioContext.createBufferSource()
    const gainNode = audioContext.createGain()

    source.buffer = audioBuffer
    source.loop = loop

    // Use the volume parameter to control the gain value
    gainNode.gain.value = volume

    // Connect the source to the gain node and connect the gain node to the destination
    source.connect(gainNode)
    gainNode.connect(audioContext.destination)

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

export const startUpAudio = async () => {
  const rainBuffer = await loadAudio(rain.rainLoop.src)
  const musicStartBuffer = await loadAudio(music.musicStart.src)

  if (rainBuffer) {
    playAudio(rainBuffer, rain.rainLoop.volume, true)
  }

  if (musicStartBuffer) {
    playAudio(musicStartBuffer, music.musicStart.volume)
  }
}
