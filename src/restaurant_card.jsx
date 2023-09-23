import React from 'react';
import './restaurant-card.css'; 

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img src = {restaurant.img} alt= {restaurant.Name}></img>
      <h1>{restaurant.Name}</h1>
      <h2>{restaurant.Location}</h2>
      <h3>Rated: {restaurant.Rating} out of 5!</h3>
      <button href = {restaurant.link} >Visit Website</button>
    </div>
  );
}

export default RestaurantCard;