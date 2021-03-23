import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header:{
        display: 'flex',
        width: '100%',
        height: '100px',
        backgroundColor: '#23272a',
        alignItems: 'center',
        padding: '5px',
        textAlign: 'center',
        margin: 'auto',
        justifyContent:'center',
        color: '#3f51b5',
        fontSize: '30px',
        left: '0',
    },
    logo:{
        fontSize: '70px',
        marginTop: '5px',
        color: '#3f51b5',
    }
})

export default useStyles;