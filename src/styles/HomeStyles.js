import WelcomeBanner from '../images/banner.jpg';

import pic1 from '../images/1.jpg';
import pic2 from '../images/2.jpg';
import pic3 from '../images/3.jpg';

const style = {
    bannerPicture: {
        width: '100%',
        height: '50vh',
        backgroundImage: `url(${WelcomeBanner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
    },

    bannerBox: {
        marginTop: '78px',
    },

    bannerTextContainer: {
        width: {
            xs: '100%',
            sm: '100%',
            md: '80%',
            lg: '50%',
        },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    bannerSmallTitle: {
        fontFamily: 'Semibold',
        fontSize: '20px',
        textTransform: 'uppercase',
        color: '#fff',
    },

    bannerBigTitle: {
        fontFamily: 'Bold',
        fontSize: '60px',
        textTransform: 'uppercase',
        color: '#fff',
        lineHeight: '55px',
    },

    bannerText: {
        fontFamily: 'Poppins',
        fontSize: '15px',
        color: '#f2f2f2',
    },

    textContainer: {
        marginLeft: '15px',
        marginBottom: {
            xs: '5px',
            sm: '5px',
            md: '10px',
            lg: '20px',
        },
    },

    buttonContainer: {
        marginLeft: '15px',
        marginTop: '20px',
    },

    seeMoreButton: {
        width: {
            xs: '50%',
            sm: '50%',
            md: '50%',
            lg: '25%',
        },
    },

    picMainContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px',
    },

    mainHistoryPanel: {
        display: 'flex',
        padding: '10px'
    },

    picContainer1: {
        width: '400px',
        height: '300px',
        backgroundColor: 'red',
        margin: '5px',

        backgroundImage: `url(${pic1})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },

    picContainer2: {
        width: '400px',
        height: '300px',
        backgroundColor: 'blue',
        margin: '5px',

        backgroundImage: `url(${pic2})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },

    picContainer3: {
        width: '400px',
        height: '300px',
        backgroundColor: 'pink',
        margin: '5px',

        backgroundImage: `url(${pic3})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },

    suggestTitle: {
        width: '100%',
        textAlign: 'center',
        position: 'relative',
    },

    titleHead: {
        fontFamily: 'Poppins',
        fontSize: '15px',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        position: 'relative',
        marginRight: 'auto',
        marginBottom: '5px',

        '&:after': {
            content: '""',
            width: '150px',
            height: '5px',
            backgroundColor: '#479923',
            position: 'absolute',
            bottom: '-1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '2px',
            marginBottom: '5px',
        },
    },

    historyContainer: {
        display: 'flex',
    },

    textHistory: {
        fontFamily: 'Poppins',
        textAlign: 'justify',
        width: '90%',
        margin: 'auto',
        lineHeight: '28px',
        fontSize: '14px',
    },

    panelText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageHistory: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },

    historyTextContainer: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },

    missionContainer: {
        marginTop: '30px',
        backgroundColor: '#16304d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        height: {
            xs: 'auto',
            sm: 'auto',
            md: 'auto',
            lg: '30vh',
        },
    },

    vissionContainer: {
        backgroundColor: '#e8e8e8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        height: {
            xs: 'auto',
            sm: 'auto',
            md: 'auto',
            lg: '30vh',
        },
    },

    suggestTitleLight: {
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        marginTop: '30px',
    },


    title: {
        color: '#479923',
        fontFamily: 'Bold',
        fontSize: '30px',
        letterSpacing: '10px',
    },

    missionText: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        color: '#fff',
        fontSize: '14px',
        lineHeight: '25px',
    },

    vissionText: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '25px',
    },
}
export default style;