import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import './team.css'
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
export default function Awards() {
    const classes = useStyles();
    const data = [
        {
            'name': 'Jagdev singh',
            'img': require('../../../assets/images/Avatar.png')
        },
        {
            'name': 'Baljinder singh',
            'img': require('../../../assets/images/Avatar.png')
        },
        {
            'name': 'Jasvir singh',
            'img': require('../../../assets/images/Avatar.png')
        },
        {
            'name': 'Adv Navneet Singh',
            'img': require('../../../assets/images/Avatar.png')
        },
        {
            'name': 'Randhir Singh Mangat',
            'img': require('../../../assets/images/Avatar.png')
        },
        {
            'name': 'Inderpreet Singh',
            'img': require('../../../assets/images/Avatar.png')
        },

    ]

    // return (
    //     <div className='teamFlex'>

    //         {

    //         }

    //     </div>


    // )

    return (
        <div className={classes.root}>
            <GridList spacing={10} cellHeight={220} className={classes.gridList} style={{ margin: '0px' }}>

                {data.map((e, i) => (
                    <GridListTile key={i} >
                        <div className='cardContainer' style={{

                        }}>
                            <img src={e.img} className='picTeam' />

                            <div className='teamDetails'>

                                <p className='teamName'>
                                    {e.name}
                                </p>

                            </div>

                        </div>
                        {/* <img src={tile.img} alt={tile.title} />
             */}
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
