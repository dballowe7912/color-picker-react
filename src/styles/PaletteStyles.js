export default {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    paletteColors: {
        height: '90%'
    },
    goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        opacity: '1',
        backgroundColor: '#000',
        '& a': {
            color: '#fff',
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255, 255, 255, 0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none'
        }
    }
}