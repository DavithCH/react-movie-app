import React from 'react'
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';

import useStyles from './headerStyles';

function Header() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.header}>
                <h1>A2ZMovies</h1>
                <MovieFilterOutlinedIcon className={classes.logo} />
            </div>
            
        </>
    )
}

export default Header
