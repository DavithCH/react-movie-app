import { Button, Grid, Tab, Tabs, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {  ThemeProvider } from '@material-ui/core/styles';
import darkTheme from '../../components/Theme';
import SearchIcon from '@material-ui/icons/SearchRounded';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';



function Search() {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState([]);

    const fetchSearch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type? "tv" : "movie"}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);

        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
    },[type,page])

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{display:'flex', margin: '15px 0', justifyContent:'space-between'}}>
                    <TextField 
                    style={{width: '100%'}}
                        label="Search"
                        variant="filled"
                        onChange={ e => setSearchText(e.target.value)}
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{margin:"0 10px", height:'55px'}}
                        onClick={fetchSearch}
                    >
                        <SearchIcon />
                    </Button>
                </div>

                <Tabs
                    style={{display:'flex'}}
                    value={type}
                    onChange={(event, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab style={{flex : 0.5}} label="Movies" />
                    <Tab style={{flex : 0.5}} label="TV Series" />
                </Tabs>
            </ThemeProvider>
            {numOfPages > 1 &&  <div style={{margin:'10px 0 0 0', paddingTop: '10px'}}><CustomPagination setPage={setPage} numOfPages={numOfPages}/></div>}

            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ marginTop:'50px'}}
            >
                {
                    content && content.map((c) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} spacing={3} key={c.id} >
                            <SingleContent  
                            key={c.id}
                            id={c.id} 
                            title={c.title || c.name} 
                            poster={c.poster_path}
                            vote={c.vote_average}
                            date={c.first_air_date || c.release_date}
                            type={type == 1 ? "tv" : "movie"}
                            vote_total={c.vote_count}
                        />
                        </Grid>
                        
                    ))
                } 
                {searchText && 
                !content && 
                (type?<Typography style={{color:"white"}}>No Series Found</Typography> : <Typography style={{color:"white"}}>No Movies Found</Typography>)
                }
            </Grid>
            {numOfPages > 1 &&  <div style={{marginBottom:'100px', paddingTop: '10px'}}><CustomPagination setPage={setPage} numOfPages={numOfPages}/></div>}
            
        </div>
    )
}

export default Search
