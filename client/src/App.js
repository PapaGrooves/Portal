import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Department from './pages/Department'
import Play from './pages/Play'
import Learn from './pages/Learn'
import Profile from './pages/Profile'
import Patients from './pages/Patients'

function App() {

  let routes = (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/department/:id' element={<Department />} />
      <Route path='/play' element={<Play />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/patients' element={<Patients />} />
    </Routes>
  )
  return (

    <Router>
      {routes}
    </Router>
  )
}

export default App
