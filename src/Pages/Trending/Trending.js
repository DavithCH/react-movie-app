import { Grid } from '@material-ui/core';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';

function Trending() {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState();
    const [numOfPages, setNumOfPages] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        
        setContent(data.results);
        setNumOfPages(data.total_pages);

    };

    useEffect(() => {
        fetchTrending();
    },[page])

    return (
        <>
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
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        </>
    )
}

export default Trending
