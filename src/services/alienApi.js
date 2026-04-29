const API_URL = 'https://ben10.fandom.com/api.php'

export async function getAliensImages(aliens) {
  const titles = aliens.map((alien) => alien.name).join('|')
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    origin: '*',
    titles,
    prop: 'pageimages',
    pithumbsize: '360',
  })

  try {
    const response = await fetch(`${API_URL}?${params}`)
    const data = await response.json()
    const pages = Object.values(data.query.pages)

    return aliens.map((alien) => {
      const page = pages.find((item) => item.title === alien.name)
      return {
        ...alien,
        image: page?.thumbnail?.source || '',
      }
    })
  } catch {
    return aliens
  }
}
