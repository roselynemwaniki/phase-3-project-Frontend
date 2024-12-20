import React from 'react'; 
// import axios from 'axios'; 

const MovieList = ({ movies, toggleFavorite, deleteMovie }) => {  
    return (  
        <div>  
            <h2>Movies</h2>  
            {movies.length === 0 ? (  
                <p>No movies available</p>  
            ) : (  
                <table>  
                    <thead>  
                        <tr>  
                            <th>Title</th>  
                            <th>Year</th>  
                            <th>Genre</th>  
                            <th>Favorites</th>  
                            <th>Actions</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        {movies.map(movie => (  
                            <tr key={movie.id}>  
                                <td>{movie.title}</td>  
                                <td>{movie.year}</td>  
                                <td>{movie.genre}</td>  
                                <td>  
                                    <button onClick={() => toggleFavorite(movie.id)}>  
                                        {movie.isFavorite ? 'Unfavorite' : 'Favorite'}  
                                    </button>  
                                </td>  
                                <td>  
                                    <button onClick={() => deleteMovie(movie.id)}>Delete</button>  
                                </td>  
                            </tr>  
                        ))}  
                    </tbody>  
                </table>  
            )}  
        </div>  
    );  
};  

export default MovieList;