import React,{ useState, useEffect } from 'react'
import {BottomNavigation, BottomNavigationAction, } from '@material-ui/core'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import darkTheme from '../../components/Theme'



const useStyles = makeStyles({
    root:{
        backgroundColor : '#23272A',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: '100',
    },
})



function Navbar() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if(value === 0){
            history.push('/');
        }else if(value === 1){
            history.push('/movies');
        }else if(value === 2){
            history.push('/series');
        }else{
            history.push('/search');
        }
    },[value, history])

    

    return (
        <ThemeProvider theme={darkTheme}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                showLabels
                className={classes.root}
                >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction label="TV series" icon={<TvIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </ThemeProvider>
        )
}

export default Navbar
