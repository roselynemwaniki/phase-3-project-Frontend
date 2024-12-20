import React, { useEffect, useState } from 'react';  
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';   
import axios from 'axios';  
import MovieList from './components/MovieList';  
import Favorites from './components/Favorites';  
import About from './components/About';   
import Home from './components/Home';   
import './styles.css';  

function App() {  
    const [movies, setMovies] = useState([]);  

    useEffect(() => {  
        fetchMovies();  
    }, []);  

    const fetchMovies = async () => {  
        try {  
            const response = await axios.get('http://localhost:5000/movies');  
            setMovies(response.data);  
        } catch (error) {  
            console.error('Error fetching movies:', error);  
        }  
    };  

    const toggleFavorite = async (id) => {  
        try {  
            await axios.patch(`http://localhost:5000/api/movies/${id}/favorite`);  
            fetchMovies(); // Refresh the list of movies  
        } catch (error) {  
            console.error('Error toggling favorite:', error);  
        }  
    };  

    const deleteMovie = async (id) => {  
        try {  
            await axios.delete(`http://localhost:5000/api/movies/${id}`);  
            fetchMovies(); // Refresh the list of movies  
        } catch (error) {  
            console.error('Error deleting movie:', error);  
        }  
    };  

    return (  
        <Router>  
            <div className="container">  
                <h1>Movie Recommendation System</h1>  
                <nav>  
                    <ul>  
                        <li><Link to="/">Home</Link></li>  
                        <li><Link to="/movies">View Movies</Link></li>  
                        <li><Link to="/favorites">Favorites</Link></li>  
                        <li><Link to="/about">About</Link></li>  
                    </ul>  
                </nav>  
                <Routes>  
                    <Route path="/" element={<Home />} />  
                    <Route path="/movies" element={<MovieList movies={movies} toggleFavorite={toggleFavorite} deleteMovie={deleteMovie} />} />  
                    <Route path="/favorites" element={<Favorites movies={movies} toggleFavorite={toggleFavorite} deleteMovie={deleteMovie} />} />  
                    <Route path="/about" element={<About />} />  
                </Routes>  
            </div>  
        </Router>  
    );  
}  

export default App;