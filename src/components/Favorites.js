import React from 'react';  

const Favorites = ({ movies, toggleFavorite, deleteMovie }) => {  
    const favoriteMovies = movies.filter(movie => movie.isFavorite);  

    return (  
        <div>  
            <h2>Your Favorite Movies</h2>  
            <ul>  
                {favoriteMovies.length === 0 ? (  
                    <li>No favorite movies found.</li>  
                ) : (  
                    favoriteMovies.map(movie => (  
                        <li key={movie.id}>  
                            {movie.title}  
                            <button onClick={() => toggleFavorite(movie.id)}>  
                                {movie.isFavorite ? 'Unfavorite' : 'Favorite'}  
                            </button>  
                            <button onClick={() => deleteMovie(movie.id)}>Delete</button>  
                        </li>  
                    ))  
                )}  
            </ul>  
        </div>  
    );  
};  

export default Favorites;