import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<ProtectedRoute component={Dashboard}></ProtectedRoute>}></Route>
        </Routes>
        <div className='background-mesh'>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <div className='circle3'></div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
