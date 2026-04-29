import { useEffect, useMemo, useState } from 'react'
import { aliensBase } from './data/aliens'
import { getAliensImages } from './services/alienApi'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Game } from './pages/Game'
import { Result } from './pages/Result'
import './styles/global.css'

function getPath() {
  return window.location.pathname
}

function App() {
  const [path, setPath] = useState(getPath())
  const [aliens, setAliens] = useState(aliensBase)
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    getAliensImages(aliensBase).then((aliensWithImages) => {
      setAliens(aliensWithImages)
    })
  }, [])

  useEffect(() => {
    function updateRoute() {
      setPath(getPath())
    }

    window.addEventListener('popstate', updateRoute)
    return () => window.removeEventListener('popstate', updateRoute)
  }, [])

  function navigate(nextPath) {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  function restartGame() {
    setAnswers([])
    navigate('/jogo')
  }

  const score = useMemo(() => {
    return answers.filter((answer) => answer.isCorrect).length
  }, [answers])

  return (
    <>
      <Header currentPath={path} onNavigate={navigate} />

      {path === '/jogo' && (
        <Game
          aliens={aliens}
          answers={answers}
          setAnswers={setAnswers}
          onFinish={() => navigate('/resultado')}
        />
      )}

      {path === '/resultado' && (
        <Result
          answers={answers}
          score={score}
          onRestart={restartGame}
          onNavigate={navigate}
        />
      )}

      {path !== '/jogo' && path !== '/resultado' && (
        <Home aliens={aliens} onStart={restartGame} />
      )}
    </>
  )
}

export default App
