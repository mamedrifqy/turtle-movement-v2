import * as rainbow from 'rainbow-colors'

const colors = rainbow.generate(10, { lum: 50, sat: 75, rgb: true }).map(c =>
  c
    .replace('rgb(', '')
    .replace(')', '')
    .split(',')
    .map(v => Number(v))
)

export const speciesList = [
  {
    name: 'Caretta caretta',
    name_en: 'Loggerhead Sea Turtle',
    type: 'Cheloniidae',
  },
  {
    name: 'Lepidochelys olivacea',
    name_en: 'Olive Ridley Sea Turtle',
    type: 'Cheloniidae',
  },
].map((s, i) => ({ ...s, color: colors[i] }))

export const speciesConfig = speciesList.reduce(
  (obj, current) => ({ ...obj, [current.name]: { ...current } }),
  {}
)

export const ANIMATION_SPEED = 3600 * 5 // 1 "step", in seconds
export const INITIAL_SAME_YEAR = true
export const AUTO_PLAY = true
