import { sfx, rain, music, speech } from './audioFiles'
import { Theme } from './audioTypes'

const themes: Theme = { music, rain, speech, sfx }

let audioContext: AudioContext | undefined
let audioNodes: { [key: string]: GainNode } = {}
if (typeof window !== 'undefined') {
  audioContext = new window.AudioContext()
}
let audioSources: { [key: string]: AudioBufferSourceNode } = {}

export const loadAudio = async (url: string) => {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = audioContext ? await audioContext.decodeAudioData(arrayBuffer) : null
  return audioBuffer
}

let audioBuffers: { [key: string]: AudioBuffer } = {}

export const playAudio = (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {
  let theme: string | undefined
  let themeFile: typeof file | undefined

  console.log('playAudio called', file.src)

  for (const key of Object.keys(themes)) {
    for (const innerKey of Object.keys(themes[key])) {
      if (themes[key][innerKey].src === file.src) {
        theme = key + file.src
        themeFile = themes[key][innerKey]
        break
      }
    }
    if (theme) break
  }

  if (!themeFile) return

  console.log('themeFile', themeFile)
  const { src, volume, loop = false, fadeIn = 0, delay = 0 } = themeFile

  const play = (audioBuffer: AudioBuffer) => {
    if (audioContext) {
      const source = audioContext.createBufferSource()
      const gainNode = audioContext.createGain()
      source.buffer = audioBuffer
      source.loop = loop

      // Schedule the gain value to be 0 at the current time plus the delay
      gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay / 1000)

      // Schedule a linear ramp to the target volume after the delay plus the fade-in time
      gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + delay / 1000 + fadeIn / 1000)

      // If the theme's AudioNode doesn't exist, create it
      if (theme && !audioNodes[theme]) {
        audioNodes[theme] = audioContext.createGain()
        audioNodes[theme].connect(audioContext.destination)
      }

      // Connect the gain node to the theme's AudioNode
      if (theme && audioNodes[theme]) {
        source.connect(gainNode)
        gainNode.connect(audioNodes[theme])
      }

      source.start(audioContext.currentTime + delay / 1000)
      if (theme) {
        audioSources[theme] = source
      }
    }
  }

  if (theme && audioBuffers[theme]) {
    console.log('playing from buffer', theme)
    play(audioBuffers[theme])
  } else {
    loadAudio(src).then(audioBuffer => {
      if (audioBuffer) {
        if (theme) {
          audioBuffers[theme] = audioBuffer
        }
        play(audioBuffer)
        console.log('playing from alternative audibuffer', audioBuffer)
      }
    })
  }
}

export const pauseAudio = (file: { src: string; volume: number; loop?: boolean; fadeIn?: number; delay?: number }) => {
  let theme: string | undefined

  for (const key of Object.keys(themes)) {
    for (const innerKey of Object.keys(themes[key])) {
      if (themes[key][innerKey].src === file.src) {
        theme = key + file.src
        break
      }
    }
    if (theme) break
  }

  if (theme && audioSources[theme]) {
    audioSources[theme].stop()
    delete audioSources[theme]
  }
}

export const loopAudio = (audioBuffer: AudioBuffer, theme: string) => {
  if (audioContext) {
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.loop = true
    source.connect(audioContext.destination)
    source.start()
  }
}

export const startUpAudio = () => {
  playAudio(rain.rainLoop)
  playAudio(music.musicStart)
  playAudio(music.musicLoop)
}

export const muteTheme = (theme: string) => {
  console.log('mute theme called', theme)
  for (const key of Object.keys(audioNodes)) {
    if (key.startsWith(theme)) {
      console.log('muting theme', key)
      audioNodes[key].gain.value = 0
    }
  }
}

export const unmuteTheme = (theme: string) => {
  console.log('unmute theme called', theme)
  for (const key of Object.keys(audioNodes)) {
    if (key.startsWith(theme)) {
      audioNodes[key].gain.value = 1
    }
  }
}

if (typeof window !== 'undefined') {
  audioContext = new window.AudioContext()

  const resumeAudioContext = () => {
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume()
    }

    // Once the audio context is resumed, remove the event listeners to prevent them from firing again
    window.removeEventListener('mousedown', resumeAudioContext)
    window.removeEventListener('keydown', resumeAudioContext)
    window.removeEventListener('touchstart', resumeAudioContext)
  }

  window.addEventListener('mousedown', resumeAudioContext)
  window.addEventListener('keydown', resumeAudioContext)
  window.addEventListener('touchstart', resumeAudioContext)
}
