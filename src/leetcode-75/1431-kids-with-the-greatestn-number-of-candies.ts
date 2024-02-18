export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const result = candies.map((candie, idx, arr) => {
    const newCandie = candie + extraCandies
    const newArr = [...arr]
    newArr.splice(idx, 1)
    const test = newArr.reduce((previousValue, currentValue) => {
      if (newCandie >= currentValue && previousValue) {
        return true
      } else {
        return false
      }
    }, true)

    return test
  })

  return result
}
