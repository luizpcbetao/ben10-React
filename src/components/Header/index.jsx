import styles from './styles.module.css'

const links = [
  { path: '/', label: 'Home' },
  { path: '/jogo', label: 'Jogo' },
  { path: '/resultado', label: 'Resultado' },
]

export function Header({ currentPath, onNavigate }) {
  return (
    <header className={styles.header}>
      <button className={styles.logo} onClick={() => onNavigate('/')}>
        Ben10 Quiz
      </button>

      <nav className={styles.menu}>
        {links.map((link) => (
          <button
            key={link.path}
            className={currentPath === link.path ? styles.active : ''}
            onClick={() => onNavigate(link.path)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
