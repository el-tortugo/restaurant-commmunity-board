import React from 'react';
import './App.css';
import RestaurantList from './restaurant-list'; // Import the RestaurantList component

function App() {

  const restaurant = [
    { 
      
      
        "Name": "Ichiraku Ramen",
        "Location": "The Hidden Leaf Village",
        "Rating": 4.5, // 
        "img": "./images/ichiraku_ramen-image.webp",
        "link": "https://naruto.fandom.com/wiki/Ramen_Ichiraku"
    },
    {
        "Name": "The Leroy House",
        "Location": "Manhattan, New York",
        "Rating": 4.6,
        "img": "./images/leroy_house_image.jpeg",
        "link": "https://www.theleroyhouse.com/"

    },
    {
        "Name": "Baratie",
        "Location": "The East Blue",
        "Rating": 5,  
        "img": "./images/Baratie_Image.webp",
        "link": "https://onepiece.fandom.com/wiki/Baratie"
    },
    {
        "Name": "Lakruwana Restaurant",
        "Location": "Staten Island, New York",
        "Rating": 4.7, // Add quotes around "tbd"
        "img": "./images/lakru-image.jpeg",
        "link": "https://www.lakruwanarestaurant.com/"
    },
    {
        "Name": "Thursday Kitchen",
        "Location": "East Village, New York",
        "Rating": "tbd",
        "img": "./images/Thursday-Image.jpeg",
        "link": "https://www.thursdaykitchen.com/"
    },
    {
        "Name": "Olio e Più",
        "Location": "Greenwich Village, New York",
        "Rating": "4.6",
        "link": "https://www.olioepiu.com/",
        "img": "./images/olio-image.jpeg"
    },
    {
        "Name": "Saigon Shack",
        "Location": "Bleecker St, New York",
        "Rating": "4.8",
        "img": "./images/saigon-image.jpeg",
        "link": "https://www.saigonshack.com/"

    },
    {
        "Name": "Gallaghers Steakhouse",
        "Location": "Hell's Kitchen, New York",
        "Rating": "4.2",
        "img": "./images/steakhouse-image.jpeg",
        "link": "https://www.gallaghersnysteakhouse.com/menu.php"

    },
    {
        "Name": "Haidilao Hot Pot",
        "Location": "Flushing, Queens, New York",
        "Rating": "4.2",
        "img": "./images/Haidilao-Image.jpeg",
        "link": "https://haidilaoflushingreserve.com/"
    },
    {
        "Name": "Ci Siamo",
        "Location": "Hudson Yards, New York",
        "Rating": "4.2",
        "img": "./images/siamo-image.jpeg",
        "link": "https://www.cisiamonyc.com/" 
    }
  ];

  return (
    <div className="App">
      <h1>Luxury Restaurant Brands</h1>
      <RestaurantList restaurants={restaurant} /> {/* Use RestaurantList component */}
    </div>
  );
}

export default App;
