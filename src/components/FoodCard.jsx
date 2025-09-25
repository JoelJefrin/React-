function FoodCard({foodDetails}){
return<>
    <div>
        <p>Item Name : {foodDetails.name}</p>
        <p>description : {foodDetails.description}</p>
        <p>price : {foodDetails.price}</p>
    </div>
</>
}
export default FoodCard;