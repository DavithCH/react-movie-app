import { Card, CardContent, CardMedia, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import { img_500, noPicture} from '../../Config/config'
import { ThemeProvider } from '@material-ui/core/styles'
import Carousel from '../Carousel/Carousel';
import YouTube from 'react-youtube';
import darkTheme from '../Theme'
import useStyles from './ContentDetailsStyles'



function ContentDetails() {

    const classes = useStyles();

    const { id } = useParams();
    const { type } = useParams();

    const[value, setValue] = useState(0);
    const [page, setPage] = useState(1);
    const[video, setVideo] = useState();

    const [content, setContent] = useState([]);
    const fetchContentDetails = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)

        setContent({data});
    }

    const fetchVideo = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);

        setVideo(data.results[0]?.key);
    }

    useEffect(() => {
        window.scroll(0,0);
        fetchContentDetails();
        fetchVideo();
        // eslint-disable-next-line
    },[type, id, page]);

    const opts = {
        height: '500',
        width: '800',
        playVars: {
            autoplay: 1,
        },
    };

const onReady = (event) =>{
        event.target.pauseVideo();
    }

    return (
        <Paper className={classes.paper}>
            {Object.entries(content).map((c) => (
                // console.log(c[1])
                <div >
                    <div className={classes.topMedia}>
                        <div>
                            <Card key={c[1].id} className={classes.root}>
                            <CardMedia
                                className={classes.cardMedia}
                                image= {c[1].poster_path ? `${img_500}/${c[1].poster_path}`: noPicture}
                            />
                            <CardContent>
                            <Typography style={{color:"#52b202"}} variant="h6" align="center" gutterBottom>{c[1].name || c[1].title}</Typography>
                            <Typography variant="body2" >{c[1].overview}</Typography>
                            </CardContent>
                            
                            </Card>
                            
                        </div>
                        <Paper style={{backgroundColor:'#23272a'}}>
                            <YouTube videoId = {video} opts={opts} onReady={onReady}/>
                            <ThemeProvider theme={darkTheme} >
                                <div style={{alignItems:'center'}}>  
                                    <Tabs
                                        style={{display:'flex'}}
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                            setPage(1);
                                        }}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        centered
                                    >
                                        <Tab style={{flex : 0.5}} label="Watch trailor" />
                                        <Tab style={{flex : 0.5}} label="Watch full movie" />
                                    </Tabs> 
                                </div>  
                            </ThemeProvider>
                            
                        </Paper>
                        
                        
                    </div>
                    <Carousel type={type} id={id} />
                </div>
                

            ))}
        </Paper>
    )
}

export default ContentDetails
