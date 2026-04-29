import { useMemo, useState } from 'react'
import { AlienCard } from '../../components/AlienCard'
import { getRandomPair, getWinner } from '../../utils/game'
import styles from './styles.module.css'

const TOTAL_ROUNDS = 10

export function Game({ aliens, answers, setAnswers, onFinish }) {
  const [pairNames, setPairNames] = useState(() =>
    getRandomPair(aliens).map((alien) => alien.name),
  )

  const pair = useMemo(() => {
    return pairNames
      .map((name) => aliens.find((alien) => alien.name === name))
      .filter(Boolean)
  }, [aliens, pairNames])

  function handleChoose(alien) {
    const winner = getWinner(pair[0], pair[1])
    const nextAnswers = [
      ...answers,
      {
        pair,
        chosen: alien,
        correct: winner,
        isCorrect: alien.name === winner.name,
      },
    ]

    setAnswers(nextAnswers)

    if (nextAnswers.length >= TOTAL_ROUNDS) {
      onFinish()
      return
    }

    setPairNames(getRandomPair(aliens).map((item) => item.name))
  }

  if (pair.length < 2) {
    return (
      <main className="page">
        <section className="section">
          <p>Preparando o Omnitrix...</p>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="section">
        <div className={styles.top}>
          <div>
            <h1 className="title">Escolha o mais antigo</h1>
            <p className="subtitle">
              Rodada {answers.length + 1} de {TOTAL_ROUNDS}. Clique no alien que
              apareceu primeiro na serie.
            </p>
          </div>

          <strong>{answers.filter((answer) => answer.isCorrect).length} pontos</strong>
        </div>

        <div className={styles.cards}>
          {pair.map((alien) => (
            <AlienCard key={alien.name} alien={alien} onChoose={handleChoose} />
          ))}
        </div>
      </section>
    </main>
  )
}
