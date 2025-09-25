import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";

 function Homepage() {
    return<>
        <Navbar/>
        <FoodCard foodDetails={{name : "pizza",description: "pizza is amazing", prize:"10$"}}/>
        <FoodCard foodDetails={{name : "burger",description: "burger is amazing", prize:"4$"}}/>
    
    
    </>

}

export default Homepage