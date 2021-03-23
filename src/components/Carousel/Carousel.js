import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, unavailable } from '../../Config/config';
import './Carousel.css';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({type, id}) => {

    const[profileUrl, setProfileUrl] = useState("");
    const[credits, setCredits] = useState();

    const items = credits?.map((c) => (
        <div className="carouselItem">
            <img
                className="carouselItem_img"
                src={c.profile_path ? `${img_300}/${c.profile_path}` : unavailable}
            />
            <Typography  variant="subtitle1" style={{color:"#52b202"}} align="center" >{c?.name}</Typography>
        </div>
    ))

        const responsive = {
            0: {
                items: 3,
            },
            512: {
                items: 5,
            },
            1024: {
                items: 7
            },
        }

    const fetchCredits = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);

        setCredits(data.cast);
    }

    useEffect(()=>{
        fetchCredits();
    },[])

    return (
        <AliceCarousel autoPlay responsive={responsive} disableDotsControls disableButtonsControls infinite mouseTracking items={items} />
    );
}

export default Carousel;