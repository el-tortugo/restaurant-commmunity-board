import React from 'react';
import RestaurantCard from './restaurant_card'; // Import your RestaurantCard component

function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
