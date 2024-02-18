import { timeLapse } from '@/utils/time-lapse'
import { gcdOfStrings } from './1071.greatest-common-divisor-of-strings'

describe('1071 Greatest Common Divisor of Strings', () => {
  it("shoud be able to get 'ABC' from 'ABCABC' and 'ABC'", () => {
    const word = timeLapse(gcdOfStrings, 'ABCABC', 'ABC')
    expect(word).toEqual('ABC')
  })

  it("shoud be able to get 'AB' from 'ABABABAB' and 'ABAB'", () => {
    const word = timeLapse(gcdOfStrings, 'ABABABAB', 'ABAB')
    expect(word).toEqual('ABAB')
  })

  it("shoud be able to get '' from 'LEET' and 'CODE'", () => {
    const word = timeLapse(gcdOfStrings, 'LEET', 'CODE')
    expect(word).toEqual('')
  })

  it("shoud be able to get '' from 'LEET' and 'CODE'", () => {
    const word = timeLapse(
      gcdOfStrings,
      'CTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXK',
      'CTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXKCTCXK',
    )
    expect(word).toEqual('CTCXK')
  })
})
