import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {


  return (
    <div>
<BrowserRouter>
<Routes>
  <Route index element ={<Home/>} />
  <Route path = '/about' element ={<About />} /> 
  <Route path = '/contact' element ={<Contact />} /> 
  <Route path = '/gallery' element ={<Gallery />} /> 
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
