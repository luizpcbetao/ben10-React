import styles from './styles.module.css'

export function AlienCard({ alien, onChoose }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        {alien.image ? (
          <img src={alien.image} alt={alien.displayName} />
        ) : (
          <span>Carregando imagem</span>
        )}
      </div>

      <h2>{alien.displayName}</h2>
      <p>{alien.species}</p>

      {onChoose && (
        <button className="button" onClick={() => onChoose(alien)}>
          Escolher
        </button>
      )}
    </article>
  )
}
