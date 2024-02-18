import { timeLapse } from '@/utils/time-lapse'
import { kidsWithCandies } from './1431-kids-with-the-greatestn-number-of-candies'

describe('1431 Kids With the Greatest Number of Candies', () => {
  it('inputs: [2,3,5,1,3] , 3 -- output: [true,true,true,false,true]', () => {
    const word = timeLapse(kidsWithCandies, [2, 3, 5, 1, 3], 3)
    expect(word).toEqual([true, true, true, false, true])
  })
  it('inputs: [4,2,1,1,2] , 1 -- output: [true,false,false,false,false]', () => {
    const word = timeLapse(kidsWithCandies, [4, 2, 1, 1, 2], 1)
    expect(word).toEqual([true, false, false, false, false])
  })
  it('inputs: [12,1,12] , 10 -- output: [true,false,true]', () => {
    const word = timeLapse(kidsWithCandies, [12, 1, 12], 10)
    expect(word).toEqual([true, false, true])
  })
})
