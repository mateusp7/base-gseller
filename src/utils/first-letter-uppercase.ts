export const firstLetterUppercase = (value: string | undefined) => {
  if (!value) return
  const firstLetter = value.slice(0, 1).toUpperCase()
  const restOfValue = value.slice(1, value.length).toLowerCase()
  return firstLetter + restOfValue
}
