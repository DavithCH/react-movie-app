import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card:{
        width: '300px',
        height: '500px',
        marginBottom: '10px',
        backgroundColor: '#23272A',
        color: 'white',
    },
    media:{
        height: '270px',
        paddingTop: '56.25%', // 16:9
    },
    theHeader:{
        maxHeight:'110px',
    },
    cardHeader:{
        margin:'10px 0',
        height:'30px',
        textAlign: 'center',
    },
    subInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        margin:'8px',
        maxHeight:'20px'
    }
})

export default useStyles;