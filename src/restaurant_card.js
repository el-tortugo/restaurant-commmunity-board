import './restaurant.js';

function RestaurantCard(props) {

    return (
        <div className='Restaurant-Card'>
            <h2>{props.RestaurantName}</h2>
            <h3>{props.RestaurantLocation}</h3>
            <h4>{props.RestaurantRating}</h4>
            <img src={props.RestaurantImage} alt={props.name} />
            <button> More Details</button>
        </div>
    )
}
