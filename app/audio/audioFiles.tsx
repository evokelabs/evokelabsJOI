export const CYBERPUNK_AMBIENCE_FADE_IN = 3000
export const RAIN_FADE_IN = 3000
export const MUSIC_START_FADE_IN = 3000
export const MUSIC_LOOP_FADE_IN = 3000
export const MUSIC_LOOP_DELAY = 7000

// Define the paths to the sfx files
export const sfx = {
  CyberpunkPunkAmbienceLoop: { src: '/sounds/CyberpunkAmbienceLoop.ogg', volume: 0.3 },
  engineLoop: { src: '/sounds/engineLoop.ogg', volume: 0.55 },
  shutters: { src: '/sounds/shutters.mp3', volume: 0.5 },
  TypeOnEnd: { src: '/sounds/TypeOnEnd.ogg', volume: 0.5 },
  TypeOnLoop: { src: '/sounds/TypeOnLoop.ogg', volume: 0.5 },
  scrabbleLoop: { src: '/sounds/scrabbleLoop.ogg', volume: 0.5 }
}

// Define the paths to the music files
export const music = {
  musicLoop: { src: '/sounds/musicLoop.ogg', volume: 0.45 },
  musicStart: { src: '/sounds/musicStart.mp3', volume: 0.45 }
}

// Define the path to the rain file
export const rain = {
  rainLoop: { src: '/sounds/rainLoop.ogg', volume: 0.15 }
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
