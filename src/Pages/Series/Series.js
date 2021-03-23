import React , { useState, useEffect }from 'react'

import { Grid } from '@material-ui/core'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenre from '../../hooks/useGenre';
import axios from 'axios';

function Series() {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState();
    const [numOfPages, setNumOfPages] = useState([]);

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genreforURL = useGenre(selectedGenres);

    const fetchSeries = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchSeries();
    },[page, genreforURL]);

    return (
        <>
            <Genres 
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ marginTop:'50px'}}
            >
                {
                    content && content.map((c) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} spacing={2} >
                            <SingleContent  
                            key={c.id}
                            id={c.id} 
                            title={c.title || c.name} 
                            poster={c.poster_path}
                            vote={c.vote_average}
                            date={c.first_air_date || c.release_date}
                            type={c.media_type}
                            vote_total={c.vote_count}
                        />
                        </Grid>
                        
                    ))
                }
            </Grid>
            {numOfPages > 1 &&  <CustomPagination setPage={setPage} numOfPages={numOfPages}/>}
    </>
    )
}

export default Series
