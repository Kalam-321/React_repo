import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{  
    // let listOfRestaurants = resList;

    // local state variable using useState()
    // let or const both work in this case. We can even change the state of const variable.
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                    console.log(listOfRestaurants);
                }}>
                    Top rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant=>(
                        <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    ))
                }             
            </div>
        </div>
    )
}

export default Body;