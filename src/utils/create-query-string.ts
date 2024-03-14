export const createQueryString = (
  params: Record<string, string | number | null>,
  searchParams?: string
) => {
  const newSearchParams = new URLSearchParams(searchParams?.toString())
  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === '') {
      newSearchParams.delete(key)
    } else {
      newSearchParams.set(key, String(value))
    }
  }
  return newSearchParams.toString()
}
