import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Department from './pages/Department'
import Play from './pages/Play'
import Learn from './pages/Learn'
import Profile from './pages/Profile'
// import ResponsiveAppBar from './components/Navigation'
import { useState, useEffect, createContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'

import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
// import axios from 'axios'

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

  const UserContext = createContext({})
  const userContext = useContext(UserContext)


  return (
    <UserContext.Provider value={userSession}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? <>loading...</> : <Routes>
          {userContext.email && (
            <Route path='/' element={<>Welcome {userContext.email}</>} />
          )}
          {!userContext.email && (
            <>
            {/* <ResponsiveAppBar />
            <div> */}
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/department/:id' element={<Department />} />
              <Route path='/play' element={<Play />} />
              <Route path='/learn' element={<Learn />} />
              <Route path='/profile' element={<Profile />}/>
              {/* </div> */}
            </>
          )}
        </Routes>}
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default App
