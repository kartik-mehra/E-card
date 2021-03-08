import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BusinessIcon from '@material-ui/icons/Business';
import WorkIcon from '@material-ui/icons/Work';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Info from './info/info';
import Gridview from './Gridview/gridView';
import Services from './services/services';
import Awards from './Awards/awards';
import {
    isMobile
} from "react-device-detect";
import './fullDetails.css';


const FullDetails = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    let details = null;

    switch (selectedIndex) {
        case 2:
            details = <Gridview />;
            break;
        case 0:
            details = <Info />;
            break;
        case 1:
            details = <Services />;
            break;
        case 3:
            details = <Awards />;
            break;
        default:
            break;
    }

    let StyleForGrid = {

    }
    // alert(isMobile)
    if (!isMobile && (selectedIndex == 2 || selectedIndex == 1))
        StyleForGrid = {
            boxShadow: "0px 0px 0px 0px #f4f4f4",
            border: "0px solid #f4f4f4",
            // backgroundColor : 'black'
        }


    console.log(selectedIndex)


    return (
        <div className="fullDetails">
            <div className='sideOptions'>

                <List component="nav" aria-label="main mailbox folders" style={{ width: '100%' }}>
                    <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon style={{ width: "10px" }}>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Company Info" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon style={{ width: "10px" }}>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon style={{ width: "10px" }}>
                            <PhotoLibraryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Gallery" />
                    </ListItem>

                    <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon style={{ width: "10px" }}>
                            <CardGiftcardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Awards" />
                    </ListItem>
                </List>
            </div>

            <div className='optionDetails' style={StyleForGrid} >

                {
                    details
                }

            </div>

        </div>
    )

};

export default FullDetails;
