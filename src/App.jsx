import Navbar from './components/Navbar'
import FoodCard from './components/FoodCard'
import Counter from './components/Counter'
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <FoodCard foodDetails={{ name: "Pizza", description: "Pizza is amazing", price: "$10" }} />
        <FoodCard foodDetails={{ name: "Burger", description: "Burger is amazing", price: "$7" }} />



      </div>
      <div>
        <Counter />

      </div>
      
    </>
  )
}

export default App
