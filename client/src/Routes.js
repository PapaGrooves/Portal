import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

import { UserContext } from './App'

function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<>Welcome {userContext.email}</>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            
          </>
        )}
      </Routes>
    </>
  )
}

export default RoutesComp
