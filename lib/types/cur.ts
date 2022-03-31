import { IImage, readUInt16LE } from './interface'
import { ICO } from './ico'

const TYPE_CURSOR = 2
export const CUR: IImage = {
  validate(input) {
    if (readUInt16LE(input, 0) !== 0) return false
    return readUInt16LE(input, 2) === TYPE_CURSOR
  },

  calculate: (input) => ICO.calculate(input)
}
