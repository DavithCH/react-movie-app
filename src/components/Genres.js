import axios from 'axios'
import React, { useEffect } from 'react'

import {  Chip } from '@material-ui/core';

function Genres({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));

        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
        setGenres(data.genres);
    }

    console.log(genres);

    useEffect(() => {
        fetchGenres();


        // component did unmount
        return () => {
            setGenres({});
        };
    },[])
    return (
        <div style={{margin: '10px',}}>
            {
            selectedGenres && selectedGenres.map((genre) => (
                <Chip
                style={{margin:'5px'}} 
                variant="outlined"
                size="small"
                label={genre.name}
                clickable
                key={genre.id}
                color="secondary"
                onDelete={() => handleRemove(genre)}
                />

            ))
        }
        {
            genres && genres.map((genre) => (
                <Chip
                style={{color:'#fff', border: '#fff 0.5px solid', margin:'5px'}} 
                variant="outlined"
                size="small"
                label={genre.name}
                clickable
                key={genre.id}
                onClick={() => handleAdd(genre)}
                />

            ))
        }
        </div>
    )
}

export default Genres
