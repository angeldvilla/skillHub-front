interface IFetcher {
  url: string
  infoDataToFetch: string
  cacheData?: true
}

export const fetcher = async <T>({
  url,
  infoDataToFetch,
  cacheData
}: IFetcher) => {
  const res = cacheData
    ? await fetch(url, { cache: 'no-store' })
    : await fetch(url)

  if (!res.ok) throw new Error(`Failed to fetch ${infoDataToFetch}`)

  return (await res.json()) as T
}
