
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Homepage from './pages/Homepage'
import './App.css'
import AddItemsPage from './pages/AddItemsPage'
import Hello from './pages/helloworld'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/add-items' element={<AddItemsPage/>}/>
        <Route path='/hello' element={<Hello/>}/>
 

      </Routes>
     
      
    </Router>
  )
}

export default App
