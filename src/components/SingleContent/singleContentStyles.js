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
    cardBottom:{
        height: '50px',
        display: 'flex',
        flexDirection: 'rows',
        justifyContent: 'space-between',
        padding:'0 10px',
        textTransform: 'uppercase',
        alignItems:'center',
    }
})

export default useStyles;