import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        flex:'0.2',
        marginBottom:'1px',
        maxWidth: 400,
        border:'none',
    },
    paper:{
        marginTop:'10px',
        marginBottom:'100px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#23272a',
    },
    cardMedia:{
        height:"500px",
    },
    topMedia:{
        marginTop:'20px',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:"space-evenly",
    }
});

export default useStyles;

