import { timeLapse } from '@/utils/time-lapse'
import { mergeAlternately } from './1768-merge-strings-alternately'

describe('1768 Merge Strings Alternately', () => {
  it("shoud be able to get 'apbqcr' from 'abc' and 'pqr'", () => {
    const word = timeLapse(mergeAlternately, 'abc', 'pqr')
    expect(word).toEqual('apbqcr')
  })

  it("shoud be able to get 'apbqrs' from 'ab' and 'pqrs'", () => {
    const word = timeLapse(mergeAlternately, 'ab', 'pqrs')
    expect(word).toEqual('apbqrs')
  })

  it("shoud be able to get 'apbqcd' from 'abcd' and 'pq'", () => {
    const word = timeLapse(mergeAlternately, 'abcd', 'pq')
    expect(word).toEqual('apbqcd')
  })
})
