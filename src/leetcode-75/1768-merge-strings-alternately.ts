export function mergeAlternately(word1: string, word2: string): string {
  const word1Length = word1.length
  const word2Length = word2.length
  const minLength = Math.min(word1Length, word2Length)
  let newWord = ''
  for (let i = 0; i < minLength; i++) {
    newWord += word1[i] + word2[i]
  }
  return newWord + word1.slice(minLength) + word2.slice(minLength)
}
