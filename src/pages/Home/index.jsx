import { AlienCard } from '../../components/AlienCard'
import styles from './styles.module.css'

export function Home({ aliens, onStart }) {
  return (
    <main className="page">
      <section className={`section ${styles.hero}`}>
        <div>
          <p className={styles.badge}>Omnitrix ligado</p>
          <h1 className="title">Quem apareceu primeiro?</h1>
          <p className="subtitle">
            Um quiz simples sobre aliens do Ben 10. As imagens sao buscadas na API
            do Ben 10 Wiki, e voce tenta lembrar qual transformacao apareceu antes
            na serie classica.
          </p>
          <button className="button" onClick={onStart}>
            Comecar jogo
          </button>
        </div>

        <div className={styles.preview}>
          {aliens.slice(0, 2).map((alien) => (
            <AlienCard key={alien.name} alien={alien} />
          ))}
        </div>
      </section>
    </main>
  )
}
