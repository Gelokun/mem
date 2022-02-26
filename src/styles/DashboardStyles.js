const style = {
    muiBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    muiComponents: {
        width: '100vw',
        maxHeight: '100vh',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flexStart'
    },
    muiText: {
        fontSize: '3rem',
        fontFamily: 'Varela Round'
    },
    panels: {
        borderRight: 1,
        borderColor: 'divider',
        display: 'flex',
        minHeight: '100vh',
        height: '100%',
        width: '15%'
    },
    dashboardContainer: {
        height: {
            xs: '75vh',
            sm: '100vh',
            md: '100%',
            lg: '100%',
        },
        backgroundColor: '#16304d',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        transition: 'all ease 0.5s',
    },

    adminPictureContainer: {
        marginTop: '20px',
        padding: '10px',
        display: 'flex',
        marginBottom: '20px',
    },

    adminPicture: {
        width: '50px',
        height: '50px',
        marginRight: '20px',
    },

    adminNamePosition: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    adminName: {
        fontFamily: 'Semibold',
        color: '#fff',
    },

    adminPosition: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontStyle: 'italic',
    },
    tabTextStyle: {
        fontFamily: 'Poppins',
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: '15px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'initial',
        minHeight: '20px',
        '&:hover': {
            background: '#fff',
            color: '#1976D2'
        }
    },
    dashboardIcon: {
        marginRight: '20px',
    },
}
export default style