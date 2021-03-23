import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const darkTheme = createMuiTheme({
    palette: {
        type:'dark',
    }
})

function CustomPagination({setPage, numOfPages = 10}) {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }

    return (
        <div
            style={{
                display:'flex', 
                width:'100%', 
                justifyContent:'center',
                marginTop:'10px'
            }}
        >
            <ThemeProvider theme={darkTheme}>
            <Pagination count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)}/>
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
