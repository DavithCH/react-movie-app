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
        color: '#7289DA',
        fontSize: '30px',
        left: '0',
    },
    logo:{
        fontSize: '70px',
        marginTop: '5px',
        color: '#7289DA',
    }
})

export default useStyles;