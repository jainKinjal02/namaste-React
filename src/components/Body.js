import RestaurantCard from "./RestaurantCard";

import swiggyArray from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //local state variable - super powerful variable
    const [obj , setListRestaurant] = useState(swiggyArray);

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=> {
                    const filteredList = obj.filter(item => item.card.card.info.avgRating > 4);
                    setListRestaurant(filteredList);
                }}>
                    Get Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    obj.map((resobj) => <RestaurantCard 
                    key={resobj.card.card.info.id} resData={resobj}/>)
                }
            </div>
        </div>
    )
}

export default Body;