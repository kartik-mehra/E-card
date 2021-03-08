import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FullDetails from '../FullDetails/fullDetails'
import BusinessIcon from '@material-ui/icons/Business';
import WorkIcon from '@material-ui/icons/Work';
import FileCopyIcon from '@material-ui/icons/FileCopy'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhoneIcon from '@material-ui/icons/Phone';
import Gridview from '../FullDetails/Gridview/gridView';
import Info from '../FullDetails/info/info';
import Services from '../FullDetails/services/services';
import LottieAnim from '../Lotties/lottie';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    WhatsappIcon, EmailIcon, WhatsappShareButton, LinkedinIcon,
} from "react-share";
import {
    BrowserView,
    MobileView,
    isMobile
} from "react-device-detect";
import './card.css';
import { Row } from 'react-bootstrap';
import { TextareaAutosize, Link } from '@material-ui/core';
import Awards from '../FullDetails/Awards/awards';


const Card = ({ }) => {

    const [page, setValue] = React.useState('0');
    const handleChange = (event, newValue) => {
        // alert(newValue)
        setValue(newValue);
    };
    const useStyles = makeStyles({
        root: {
            display: "flex",
            alignSelf: "stretch",
            justifyContent: "end",
            // backgroundColor:'red'
        },
        flx:
        {
            flex: 1,
            padding: '0px',
            paddingTop: '6px',
            maxWidth: "25%",
            minWidth: "25%",
            // backgroundColor:'white'
        },
        mobileView: {
            display: "flex",
            flex: 1,
            alignSelf: "stretch",
            justifyContent: "end",
            flexDirection: "column-reverse"
        }
    });
    const classes = useStyles();

    let details = null;

    switch (page) {
        case '3':
            details = <Gridview />;
            break;
        case '1':
            details = <Info />;
            break;
        case '2':
            details = <Services />
            break;
        case '4':
            details = <Awards />
            break;
        default:
            break;
    }

    return (
        <div className={(isMobile) ? "CardMobile" : "Card"}>
            <BrowserView style={{ flexDirection: "column" }}>
                <div class='cover'>
                    {/* <rect width="100%" height="100%" fill="red"/> */}
                    {/* <img src=Avatar.png className='cover' /> */}
                    <div className="profile">
                        <div className="imgProfile">
                            <img src={require('../../assets/images/Avatar.png')} className='pic' />
                        </div>
                        <div className='profileDetails'>
                            <p className='name'> Jagdev Singh </p>
                            <a href="https://goo.gl/maps/ALSG32toLAYXyjf66" target="_blank">
                                <Button
                                    color="secondary"
                                    style={{ margin: 0, height: 'auto', fontSize: "1.8vh", padding: 0 }}
                                    startIcon={<LocationOnIcon />}
                                >
                                    <p className='name' style={{ margin: '0px', fontSize: "1.8vh", fontWeight: 'normal' }}> Mohali, Chandigarh </p>
                                </Button>
                            </a>
                            <p className='name' style={{
                                marginTop: '0px', fontSize: "1.8vh",
                                backgroundColor: 'red',
                                borderRadius: '4px',
                                paddingLeft: "2px",
                                paddingRight: "2px",
                                color: 'white',
                                fontWeight: 'normal'
                            }}> Sales / Entrepreneur </p>
                        </div>

                    </div>

                </div>
                <FullDetails />



            </BrowserView>

            <MobileView>

                <div className={classes.mobileView}>
                    {/* <p>kdald</p> */}
                    <BottomNavigation value={page} onChange={handleChange} className={classes.root}>
                        <BottomNavigationAction label="Profile" value="0" className={classes.flx} icon={<PersonIcon />} />
                        <BottomNavigationAction label="Info" value="1" className={classes.flx} icon={<BusinessIcon />} />
                        <BottomNavigationAction label="Services" value="2" className={classes.flx} icon={<WorkIcon />} />
                        <BottomNavigationAction label="Photos" value="3" className={classes.flx} icon={<PhotoLibraryIcon />} />
                        {/* <BottomNavigationAction label="Team" value="4" className={classes.flx} icon={<GroupIcon />} /> */}
                    </BottomNavigation>

                    <div style={{
                        alignSelf: 'center',
                        direction: "row-reverse",
                        width: "100%",
                        margin: '0px',
                        marginTop: "0%",
                        flex: 1,
                        overflow: "hidden"
                    }}>

                        {
                            page == '0' ? <div style={{
                                alignSelf: 'center',
                                flexDirection: "column",
                                width: "90%",
                                margin: '0px',
                                marginTop: "0%",
                                flex: "0 0 100%",
                                overflow: "hidden",
                                backgroundColor: 'white',
                                zIndex: 2,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                overflow: 'auto',
                                height: '100%',
                            }}>

                                <div style={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: "relative",
                                    height: 'auto'
                                }}>

                                    <div
                                        style={{
                                            display: 'inherit',
                                            position: 'absolute',
                                            width: 'auto',
                                            height: 'auto',
                                            top: "10%",
                                            right: "05%"
                                        }}>

                                        <a href="tel:+91-9814965585"><IconButton>
                                            <PhoneIcon style={{ color: 'black', fontSize: 22 }} />
                                        </IconButton></a>
                                    </div>


                                    <div
                                        style={{
                                            display: 'inherit',
                                            position: 'absolute',
                                            width: 'auto',
                                            height: 'auto',
                                            top: "10%",
                                            left: "05%"
                                        }}>
                                        <EmailShareButton url={'er.jagdevsingh39@gmail.com'} >
                                            <EmailIcon
                                                iconFillColor="black"
                                                bgStyle={{
                                                    fill: 'white'
                                                }}
                                                size={45}
                                                round
                                            />
                                        </EmailShareButton>
                                    </div>

                                    <img src={require('../../assets/images/Profile.jpg')} className='picMobile'
                                        style={{ margin: 0, marginTop: '4vh', marginBottom: '15px' }}
                                    />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignSelf: 'center',
                                    flexDirection: 'column',
                                    // flex: 1,
                                    margin: '0px',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    // zIndex:2,
                                    backgroundColor: 'white',
                                    height: 'auto'
                                }} >
                                    <p className='name'> Jagdev Singh </p>
                                    <a href="https://goo.gl/maps/ALSG32toLAYXyjf66" target="_blank">
                                        <Button
                                            style={{ margin: 0, height: 'auto', fontSize: "2vh", padding: 0, color: '#c4c4c4' }}
                                            startIcon={<LocationOnIcon fill='white' />}
                                        >
                                            <p className='name' style={{ marginTop: '0px', fontSize: "2vh", fontWeight: 'normal', color: '#c4c4c4' }}> Mohali, Chandigarh </p>
                                        </Button>
                                    </a>



                                    <div style={{
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: "relative",
                                        height: '10vh',
                                        paddingTop: '2vh',
                                        // flex: 1
                                    }}>
                                        <div
                                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <FacebookShareButton url={'https://www.google.com'} >
                                                <FacebookIcon iconFillColor="black"
                                                    bgStyle={{
                                                        fill: 'white'
                                                    }}
                                                    size={34}
                                                    round

                                                />
                                            </FacebookShareButton>
                                        </div>

                                        <div
                                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <WhatsappShareButton url={'+91-9814965585'} >
                                                <WhatsappIcon iconFillColor="black"
                                                    bgStyle={{
                                                        fill: 'white'
                                                    }}
                                                    size={30}
                                                    round

                                                />
                                            </WhatsappShareButton>
                                        </div>




                                        <div
                                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                                            <IconButton onClick={() => {

                                                const dummy = document.createElement("textarea");
                                                // to avoid breaking orgain page when copying more words
                                                // cant copy when adding below this code
                                                // dummy.style.display = 'none'
                                                document.body.appendChild(dummy);
                                                //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
                                                dummy.value = "Jagdev Singh";
                                                dummy.select();
                                                document.execCommand("copy");
                                                document.body.removeChild(dummy);

                                            }}>
                                                <FileCopyIcon style={{ color: 'black', fontSize: 22 }} />
                                            </IconButton>
                                        </div>



                                    </div>

                                    {/* <Box component="fieldset" mb={3} borderColor="transparent" style={{ marginTop: '20px' }}>
                                        
                                        <Rating name="half-rating-read" defaultValue={0} value={3.7} precision={0.1} readOnly />
                                        
                                    </Box> */}

                                    <div style={{
                                        width: '90%', height: '50%',
                                        boxShadow: '0px 0px 10px 1px #f4f4f4',
                                        border: "2px solid #f4f4f4",
                                        borderRadius: '10px',
                                        height: 'auto',
                                        marginTop: 10
                                    }}>

                                        <LottieAnim />

                                    </div>



                                </div>
                            </div> : null
                        }

                        <div style={{
                            display: 'flex',
                            alignSelf: 'center',
                            direction: "row",
                            flex: "0 0 100%",
                            margin: '0px',

                            flexDirection: 'column',
                            // zIndex:2,
                            backgroundColor: 'white'

                        }}>
                            <div class='cover'>

                                <div className="profile" style={{ margin: 0 }}>
                                    <div className="imgProfile">
                                        <img src={require('../../assets/images/Profile.jpg')} className='picMobileCover'
                                            
                                        />
                                    </div>
                                    <div className='profileDetails' style={{ margin: 0, marginRight: '10px', alignItems: 'flex-end' }}>
                                        <p className='name'> Jagdev Singh </p>
                                        <a href="https://goo.gl/maps/ALSG32toLAYXyjf66" target="_blank">
                                            <Button
                                                style={{ margin: 0, height: 'auto', fontSize: "1.4vh", padding: 0, color: 'black' }}
                                                
                                            >
                                                <LocationOnIcon fill='white' style={{fontSize:'2.2vh'}} />
                                                <p className='name' style={{ marginTop: '0px', fontSize: "1.8vh", fontWeight: 'normal', fontFamily: 'sans-serif' }}> Mohali, Chandigarh </p>
                                            </Button>
                                        </a>

                                        <p className='name' style={{
                                            marginTop: '0px', fontSize: "1.8vh",
                                            backgroundColor: 'red',
                                            borderRadius: '4px',
                                            paddingLeft: "6px",
                                            paddingRight: "6px",
                                            color: 'white',
                                            fontWeight: 'normal'
                                        }}> Entrepreneur </p>
                                    </div>

                                </div>

                            </div>

                            <div className="optionDetails" style={{
                                alignSelf: 'center',
                                direction: "row",
                                width: "90%",
                                margin: '0px',
                                marginTop: "5%",
                                flex: 1,
                                overflow: "auto"
                            }}>

                                {
                                    details
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </MobileView>
        </div>

    )

};

export default Card;
