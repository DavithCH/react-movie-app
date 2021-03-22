import React,{ useState, useEffect } from 'react'
import {BottomNavigation, BottomNavigationAction, } from '@material-ui/core'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';


import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root:{
        backgroundColor : '#23272A',
        position: 'fixed',
        width: '100%',
        bottom: 0,
        zIndex: '100',
    },
    navIcons:{
        color: "#fff",
    }
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
    },[value])

    const darktheme = createMuiTheme({
        palette:{
            type: 'dark',
        },
    })

    return (
        <ThemeProvider theme={darktheme}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                showLabels
                className={classes.root}
                >
                <BottomNavigationAction className={classes.navIcons} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction className={classes.navIcons} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction className={classes.navIcons} label="TV series" icon={<TvIcon />} />
                <BottomNavigationAction className={classes.navIcons} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </ThemeProvider>
        
        )
}

export default Navbar
