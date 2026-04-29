export function getRandomPair(aliens) {
  const firstIndex = Math.floor(Math.random() * aliens.length)
  let secondIndex = Math.floor(Math.random() * aliens.length)

  while (firstIndex === secondIndex) {
    secondIndex = Math.floor(Math.random() * aliens.length)
  }

  return [aliens[firstIndex], aliens[secondIndex]]
}

export function getWinner(first, second) {
  return first.order < second.order ? first : second
}
