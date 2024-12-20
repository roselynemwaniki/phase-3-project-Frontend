// src/components/Home.js  
import React from 'react';  

const Home = () => {  
    return (  
        <div>  
            <h2>Welcome to the Movie Recommendation System!</h2>  
            <p>  
                This application allows you to add your favorite movies, mark them as favorites,  
                and view your movie list. You can also manage your favorite movies easily at any time.  
            </p>  
            <h3>How to Use This App:</h3>  
            <ul>  
                <li>Add a movie title in the provided input field.</li>  
                <li>Click on "Add Movie" to include it in your list.</li>  
                <li>View your movies and mark your favorites as needed.</li>  
                <li>Remove movies from the list if they no longer interest you.</li>  
                <li>Check out the Favorites page to see your marked favorites.</li>  
            </ul>  
            <h3>Enjoy your movie journey!</h3>  
        </div>  
    );  
};  

export default Home;