import JOISpeech from '@/app/audio/JOI/JOISpeech.json'

type AudioFile = {
  src: string
  volume: number
  fadeIn?: number
  delay?: number
  loop?: boolean
}

// Define the paths to the sfx files
export const sfx = {
  CyberpunkPunkAmbienceLoop: { src: '/sounds/CyberpunkAmbienceLoop.ogg', volume: 0.3, fadeIn: 3000, delay: 13000, loop: true },
  engineLoop: { src: '/sounds/engineLoop.ogg', volume: 0.55, loop: true },
  shutters: { src: '/sounds/shutters.mp3', volume: 0.5 },
  TypeOnEnd: { src: '/sounds/TypeOnEnd.ogg', volume: 0.5 },
  TypeOnLoop: { src: '/sounds/TypeOnLoop.ogg', volume: 0.5, loop: true },
  scrabbleLoop: { src: '/sounds/scrabbleLoop.ogg', volume: 0.5, loop: true }
}

// Define the paths to the music files
export const music = {
  musicLoop: { src: '/sounds/musicLoop.ogg', volume: 0.45, fadeIn: 8000, delay: 5000, loop: true },
  musicStart: { src: '/sounds/musicStart.mp3', volume: 0.6, delay: 50 }
}

// Define the path to the rain file
export const rain = {
  rainLoop: { src: '/sounds/rainLoop.ogg', volume: 0.15, fadeIn: 3000, loop: true }
}

export const speech = JOISpeech.preloader.reduce((acc: Record<string, AudioFile>, item) => {
  const fileName = item.filepath.split('/').pop()?.split('.')[0] // Extract the file name from the file path
  if (fileName) {
    acc[fileName] = {
      src: item.filepath,
      volume: 0.45,
      fadeIn: 150,
      delay: 750
    }
  }
  return acc
}, {})
