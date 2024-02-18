export function gcdOfStrings(str1: string, str2: string): string {
  const str1Length = str1.length
  const str2Length = str2.length
  const minLength = Math.min(str1Length, str2Length)
  let strResult = ''
  for (let i = 1; i <= minLength; i++) {
    const str = str1.slice(0, i)
    const arr1 = str1.split(str)
    const arr2 = str2.split(str)
    if (arr1.every((str) => str === '') && arr2.every((str) => str === '')) {
      strResult = str
    }
  }
  return strResult
}
