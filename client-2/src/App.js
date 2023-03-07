import { useState, useEffect, createContext } from 'react'
import Routes from './Routes'
import './scss/app.css'
import theme from './styles/theme'
import { ThemeProvider } from '@mui/material/styles'
export const UserContext = createContext({})

function App() {
  const [loading, setLoading] = useState(true)
  const [userSession, setUserSession] = useState(true)

  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        setLoading(true)
        const res = await fetch('/api/isAuth')
        if (!res.ok) return setLoading(false)

        setUserSession(await res.json())
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('There was an error fetch auth, please try again', error)
        return
      }
    }
    fetchUserAuth()

  }, [])

  return (
<ThemeProvider theme={theme}>
    <UserContext.Provider value={userSession}>
        {loading ? <>loading...</> : <Routes />}
    </UserContext.Provider>
    </ThemeProvider>
  
  )
}

export default App
