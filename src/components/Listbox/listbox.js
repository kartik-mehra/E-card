import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BusinessIcon from '@material-ui/icons/Business';
import WorkIcon from '@material-ui/icons/Work';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import '../FullDetails/fullDetails.css'


const Listbox = ({ }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };



    return (

        <div style={{
            maxHeight: '35vh', width: '90%', height: 'auto',
            boxShadow: '0px 0px 10px 1px #f4f4f4',
            border: "2px solid #f4f4f4",
            borderRadius: '10px',
            overflow:'auto'
        }}>

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
    )

};

export default Listbox;
