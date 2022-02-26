const style = {
    mainContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContainer: 'center',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
    },

    mainGrid: {
        justifyContent: 'center',
    },

    perContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '270px',
        textAlign: {
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'left',
        },
    },

    footerTitle: {
        fontFamily: 'Bold',
        fontSize: '23px',
        lineHeight: '55px',
    },

    footerContent: {
        fontFamily: 'Poppins',
        lineHeight: '30px',
        cursor: 'pointer',
        fontSize: '15px',

        "&:hover":{
            color: '#479923',
        },
    },

    footerContentContact: {
        fontFamily: 'Poppins',
        lineHeight: '30px',
        cursor: 'pointer',
        fontSize: '15px',
    },

    miniFooter: {
        backgroundColor: '#195919',
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    
    miniFooterText: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontSize: '14px',
    },

}
export default style;