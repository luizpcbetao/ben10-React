import styles from './styles.module.css'

export function Result({ answers, score, onRestart, onNavigate }) {
  if (answers.length === 0) {
    return (
      <main className="page">
        <section className="section">
          <h1 className="title">Resultado</h1>
          <p className="subtitle">Jogue uma partida para ver sua pontuacao aqui.</p>
          <button className="button" onClick={onRestart}>
            Ir para o jogo
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="section">
        <div className={styles.header}>
          <div>
            <h1 className="title">Resultado final</h1>
            <p className="subtitle">
              Voce acertou {score} de {answers.length}. Abaixo aparece sua escolha
              e qual alien realmente veio primeiro.
            </p>
          </div>

          <div className={styles.actions}>
            <button className="button" onClick={onRestart}>
              Jogar de novo
            </button>
            <button className="button secondary" onClick={() => onNavigate('/')}>
              Home
            </button>
          </div>
        </div>

        <div className={styles.list}>
          {answers.map((answer, index) => (
            <article
              key={`${answer.chosen.name}-${index}`}
              className={`${styles.item} ${answer.isCorrect ? styles.right : styles.wrong}`}
            >
              <strong>Rodada {index + 1}</strong>
              <p>Sua escolha: {answer.chosen.displayName}</p>
              <p>
                Correto: {answer.correct.displayName} - temporada {answer.correct.season},
                episodio {answer.correct.episode}
              </p>
              <small>{answer.correct.firstEpisode}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
