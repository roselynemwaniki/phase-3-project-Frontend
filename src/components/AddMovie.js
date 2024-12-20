import React, { useState } from 'react';  

const AddMovie = ({ fetchMovies }) => {  
    const [title, setTitle] = useState('');  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        await fetch('/api/movies', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({ title }),  
        });  
        setTitle('');  
        fetchMovies();  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <input  
                type="text"  
                value={title}  
                onChange={(e) => setTitle(e.target.value)}  
                placeholder="Add a movie"  
                required  
            />  
            <button type="submit">Add Movie</button>  
        </form>  
    );  
};  

export default AddMovie;