/* eslint-disable @typescript-eslint/no-explicit-any */
export const timeLapse = <A extends any[], R>(
  func: (...args: A) => R,
  ...args: A
): R => {
  const start = performance.now()
  const result = func(...args)
  const end = performance.now()
  console.log(`Execution time: ${(end - start).toFixed(3)} ms`)
  return result
}
