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
        justifyContent: 'flexStart',
        backgroundColor: '#e2e2e2'
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
        textTransform: 'capitalized',
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
    logOutTextStyle: {
        fontFamily: 'Poppins',
        color: '#fff',
        textTransform: 'capitalized',
        fontSize: '15px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'initial',
        minHeight: '20px',
        '&:hover': {
            background: '#7C0000',
            color: '#fff'
        }
    },
    dashboardIcon: {
        marginRight: '20px',
    },
    titleContainer: {
        backgroundColor: '#16304d',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'Semibold',
        fontSize: '25px',
        color: '#fff',
    },
    formRegisterContainer: {
        marginTop: '3vh',

    },
    registerForm1: {
        backgroundColor: '#fff',
        boxShadow: 1,
        padding: '10px',
    },

    registerForm2: {
        backgroundColor: '#fff',
        boxShadow: 1,
        padding: '10px',
    },
    subTitle: {
        backgroundColor: '#16304d',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },

    subTitleText: {
        fontFamily: 'Poppins',
        color: '#fff',
        marginLeft: '10px',
    },
    paperMain1: {
        width: {
            xs: '100%',
            sm: '100%',
            md: '50%',
            lg: '50%',
        },
    },
    paperMain2: {
        width: {
            xs: '100%',
            sm: '100%',
            md: '48%',
            lg: '48%',
        },
    },
    infoTextBox: {
        '& .MuiOutlinedInput-root': {
            '&:hover': {
                borderColor: '#16304d',
            },

        },

        '& .MuiInputBase-input': {

            color: '#000',
        },
        width: {
            xs: '180px',
            sm: '195px',
            md: '195px',
            lg: '280px',
            xl: '400px',
        },


    },
    genderSelect: {
        border: '1px solid #16304d',
        height: '40px',
        width: {
            xs: '180px',
            sm: '195px',
            md: '195px',
            lg: '280px',
            xl: '400px',
        },
        fontFamily: 'Poppins',
        color: '#000',
        marginRight: '10px',
    },

    pickDate: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#16304d',
            },

            '&:hover fieldset': {
                borderColor: '#16304d',
            },

            '&.Mui-focused fieldset': {
                borderColor: '#16304ds',
            },

            fontFamily: 'Poppins',
            borderRadius: 0,
        },

        '& .MuiInputBase-input': {
            padding: '10px',
            color: '#000',
        },

        width: {
            xs: '180px',
            sm: '195px',
            md: '195px',
            lg: '300px',
            xl: '400px',
        },
    },

    pictureContainerMain: {
        marginTop: '30px',
        display: 'flex',
    },

    pictureContainer: {
        marginRight: '10px'
    },

    pictureDetail: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '150px',
    },

    instructionUpload: {
        fontFamily: 'Semibold',
        fontSize: '18px',
    },

    subInstruction: {
        fontFamily: 'Poppins',
    },

    uploadButton: {
        borderRadius: 0,
        boxShadow: 0,
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    personalInfoTitle: {
        backgroundColor: '#16304d',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '3px',
        marginBottom: '20px',
    },

    personalInfoText: {
        color: '#fff',
        fontFamily: 'Poppins',
    },
    residentInfoContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px',
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: 1,
        marginTop: '40px',

    },
    residentInfoBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '32%',
    },
    infoFixed: {
        width: '35%',
        marginLeft: '10px',
    },

    infoTextFixed: {
        fontFamily: 'Semibold',
    },

    mainInfo: {
        fontFamily: 'Poppins',
        color: '#6e6e6e',
    },
    mainInfo1: {
        fontFamily: 'Poppins',
        color: '#6e6e6e',
        fontSize: '10px',
    },

    menuItemText: {
        fontFamily: 'Poppins',
    },

    summaryCountContainer: {
        marginTop: '30px',

    },
    perItem: {
        margin: '10px',
    },
    detailContainer: {
        backgroundColor: '#fff',
        boxShadow: 1,
        borderRadius: '5px',
        padding: '15px',
        display: 'flex',
        width: {
            xs: '300px',
            sm: '300px',
            md: '300px',
            lg: '200px',
        },
        justifyContent: 'space-between',
    },

    infoTextContainer: {
        textAlign: 'right',
    },
    infoItemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '5px',
    },

    infoItemText: {
        fontFamily: 'Poppins',
    },
    tableProperties1: {
        maxHeight: '50vh',
    },
    tableBox: {
        margin: 1,
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
    },
    searchContainer: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        marginTop: '5px',
    },
    textAndButton: {
        display: 'flex',
    },
    searchBar: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#16304d',
            },

            '&:hover fieldset': {
                borderColor: '#16304d',
            },

            '&.Mui-focused fieldset': {
                borderColor: '#16304ds',
            },

            fontFamily: 'Poppins',

        },

        '& .MuiInputBase-input': {
            padding: '10px',
            color: '#000',
        },

        width: {
            xs: '80px',
            sm: '180px',
            md: '250px',
            lg: '400px',
        },
        marginRight: '10px',
    },

    searchButton: {
        boxShadow: 0,
        borderRadius: 0,
    },
    sortChoice: {
        border: '1px solid #16304d',
        height: '40px',
        width: '30%',
        fontFamily: 'Poppins',
        color: '#000',
    },

    coloredIcon1: {
        backgroundColor: '#d46600',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },
    infoIconColor: {
        color: '#fff',
    },

    infoDescription: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        color: '#6e6e6e',
    },
    infoDescriptionValue: {
        fontFamily: 'Semibold',
        fontSize: '18px',
    },
    coloredIcon2: {
        backgroundColor: '#0097f5',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },

    coloredIcon3: {
        backgroundColor: '#c730a4',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },

    coloredIcon4: {
        backgroundColor: '#479923',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },

    coloredIcon5: {
        backgroundColor: '#5918c9',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },

    coloredIcon6: {
        backgroundColor: '#c91818',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },

    coloredIcon7: {
        backgroundColor: '#4f4d4d',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },

    coloredIcon8: {
        backgroundColor: '#d4a302',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },
    coloredIcon9: {
        backgroundColor: '#D96098',
        width: '70px',
        height: '70px',
        marginTop: '-30px',
        borderRadius: '5px',
        boxShadow: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSvgIcon-root': {
            fontSize: '35px',
        },
    },


}
export default style