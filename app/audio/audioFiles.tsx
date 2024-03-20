// Define the paths to the sfx files
export const sfx = {
  CyberpunkPunkAmbienceLoop: { src: '/sounds/CyberpunkAmbienceLoop.ogg', volume: 0.3, fadeIn: 3000, delay: 13000 },
  engineLoop: { src: '/sounds/engineLoop.ogg', volume: 0.55 },
  shutters: { src: '/sounds/shutters.mp3', volume: 0.5 },
  TypeOnEnd: { src: '/sounds/TypeOnEnd.ogg', volume: 0.5 },
  TypeOnLoop: { src: '/sounds/TypeOnLoop.ogg', volume: 0.5 },
  scrabbleLoop: { src: '/sounds/scrabbleLoop.ogg', volume: 0.5 }
}

// Define the paths to the music files
export const music = {
  musicLoop: { src: '/sounds/musicLoop.ogg', volume: 0.45, fadeIn: 3000, delay: 7000 },
  musicStart: { src: '/sounds/musicStart.mp3', volume: 0.45, fadeIn: 3000 }
}

// Define the path to the rain file
export const rain = {
  rainLoop: { src: '/sounds/rainLoop.ogg', volume: 0.15, fadeIn: 3000 }
}

export interface AudioContextType {
  muteAll: boolean
  setMuteAll: (value: boolean) => void
  muteGroups: {
    sfx: boolean
    music: boolean
    rain: boolean
    speech: boolean
  }
  setMuteGroup: (group: string, value: boolean) => void
  audioGroups: {
    sfx: typeof sfx
    music: typeof music
    rain: typeof rain
  }
  playAll: () => void
}

export interface AudioContextType {
  playSpecificSfx: (soundKey: keyof typeof sfx) => void
}
