import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card:{
        width: '300px',
        height: 'max-content',
        marginBottom: '10px',
        backgroundColor: '#23272A',
        color: 'white',
    },
    media:{
        height: '250px',
        paddingTop: '56.25%', // 16:9
    },
    cardHeader:{
        marginTop: '10px',
        height:'30px',
        textAlign: 'center',
    },
    subInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        margin:'8px'
    }
})

export default useStyles;