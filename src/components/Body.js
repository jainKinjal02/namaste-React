import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

//import swiggyArray from "../utils/mockData";
import { useState , useEffect} from "react";

const Body = () => {
    //local state variable - super powerful variable
    const [obj , setListRestaurant] = useState([]);
    const [filteredRestaurant , setFilterList] = useState([]);
    const [searchText , setSearchText] = useState("");
    
    useEffect(()=> {
        // console.log('effect called')
        fetchData();
    }, []);

    const fetchData =  async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        setListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return obj.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type='text' onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} className="search-box" value={searchText}/>
                    <button onClick={()=>{
                             const filterList = obj.filter(
                                item => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                setFilterList(filterList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=> {
                     const filterList = obj.filter(item => item.info.avgRating > 4.3);
                    setFilterList(filterList);
                }}>
                    Get Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((resobj) => <RestaurantCard 
                    key={resobj.info.id} resData={resobj}/>)
                }
            </div>
        </div>
    )
}

export default Body;