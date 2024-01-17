import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {info} = resData;
    return (
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt='Truffles' src={CDN_URL
                    +info.cloudinaryImageId}></img>
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(', ')}</h4>
            <h5>{info.costForTwo}</h5>
            <h5>{info.avgRatingString} stars</h5>
            <h5>{info.sla.slaString}</h5>
        </div>
    )
}

export  default RestaurantCard;