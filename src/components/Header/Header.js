import React from 'react'
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';

import useStyles from './headerStyles';
import { Link } from 'react-router-dom';

function Header() {
    const classes = useStyles();
    return (
        <>
        <Link to="/" style={{textDecoration:'none'}}>
            <div className={classes.header} >
                    <h1>A2ZMovies</h1>
                    <MovieFilterOutlinedIcon className={classes.logo} />
                </div>
            </Link>
            
            
        </>
    )
}

export default Header
