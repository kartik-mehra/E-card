import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './services.css'
import IconButton from '@material-ui/core/IconButton';
import LaptopIcon from '@material-ui/icons/Laptop';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import SecurityIcon from '@material-ui/icons/Security';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import {
    isMobile
} from "react-device-detect";
const styless = (isMobile) ? {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        // overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: "100%",
    },
} : {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            border: "2px solid #f4f4f4",
            borderRadius: "10px",
            maxHeight: "92%",
            // backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: '100%',
            height: "100%",
            position: "relative",
            /* height: auto; */
            /* box-shadow:0px 0px 10px 1px #f4f4f4; */
        },
    };

const useStyles = makeStyles((theme) => (styless));;
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Services() {
    const classes = useStyles();
    const tileData = [
        {
            img: <HomeWorkIcon style={{ color: 'white' }}/>,
            title: 'Real Estate',
            desc: 'Sales, purchase and lease of all kind of property within tricity',

        },
        {
            img: <LaptopIcon style={{ color: 'white' }}/>,
            title: 'Laptop Repair',
            desc: 'We can restore your computers original factory content and get you up and running again, upgrade your current installation, repair or perform a fresh install of your operating system which would include. Backup of all your data (if required) including drivers, Full format of the Hard disk and reload of the operating system.We would then put your personal data back on.',

        },
        {
            img: <DesktopMacIcon style={{ color: 'white' }}/>,
            title: 'Desktop Repair',
            desc: 'We can restore your computers original factory content and get you up and running again, upgrade your current installation, repair or perform a fresh install of your operating system which would include. Backup of all your data (if required) including drivers, Full format of the Hard disk and reload of the operating system.We would then put your personal data back on.',

        },
        {
            img: <SettingsInputAntennaIcon style={{ color: 'white' }}/>,
            title: 'Network / Internet setup',
            desc: 'Set up your Broadband and configure your router for Internet at home. Connect your Computer and games console to broadband We’ll secure and encrypt your home wireless network for you, so your network can’t get hacked or use your broadband connection.Share files, printers and media across your network Problems with signal strength from your computer to your router, you may require a stronger antenna to give you a better signal. Networks are a great because they allow you to share with other devices.',

        },
        {
            img: <SecurityIcon style={{ color: 'white' }}/>,
            title: 'CCTV\'s',
            desc: 'CCTV cameras installation and setup.',

        },
      
    ]

    return (
        <div className={classes.root}>
            <GridList spacing={10} cellHeight={220} className={classes.gridList} style ={{margin:'0px'}}>

                {tileData.map((tile,i) => (
                    <GridListTile key={i} >
                        <div style={{
                            border: "2px solid #f4f4f4",
                            borderRadius: "10px",
                            /* height: auto; */
                            boxShadow: "0px 0px 10px 1px #f4f4f4",
                            overflow: 'hidden',
                            height: '90%',
                            width: '90%',
                            alignSelf: "center",
                            marginLeft: '5%',
                            marginTop: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: "center"
                        }}>
                            <IconButton style={{ backgroundColor:'#ff4e4e',marginTop:'10%' }}>
                                {tile.img}
                            </IconButton>

                            <p className = 'title'>{tile.title} </p>
                            <p className='description'>{tile.desc}</p>

                        </div>
                        {/* <img src={tile.img} alt={tile.title} />
             */}
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
