import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
            maxHeight: "70%",
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

const useStyles = makeStyles((theme) => (styless));



const Gridview = ({ }) => {
    const classes = useStyles();

    // const tileData = [
    //     {
    //         img : 'https://picsum.photos/600/300?random=1',
    //         title : '1',
    //         author: 'author',
    //         cols: 1,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=2',
    //         title : '2',
    //         author: 'author',
    //         cols: 1,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=3',
    //         title : 'a',
    //         author: 'author',
    //         cols: 1,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=4',
    //         title : 'a',
    //         author: 'author',
    //         cols: 2,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=5',
    //         title : 'a',
    //         author: 'author',
    //         cols: 1,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=6',
    //         title : 'a',
    //         author: 'author',
    //         cols: 3,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=7',
    //         title : 'a',
    //         author: 'author',
    //         cols: 2,
    //     },
    //     {
    //         img : 'https://picsum.photos/600/300?random=8',
    //         title : 'a',
    //         author: 'author',
    //         cols: 2,
    //     }

    // ]

    const tileData = [
        {
            img: require('../../../assets/images/Img_1.jpeg'),
            title: '1',
            author: 'author',
            cols: 1,
        },
        {
            img: require('../../../assets/images/Img_2.jpeg'),
            title: '1',
            author: 'author',
            cols: 2,
        },
        {
            img: require('../../../assets/images/Img_3.jpeg'),
            title: '1',
            author: 'author',
            cols: 2,
        },
        {
            img: require('../../../assets/images/Img_4.jpeg'),
            title: '1',
            author: 'author',
            cols: 1,
        },
        {
            img: require('../../../assets/images/Img_5.jpeg'),
            title: '1',
            author: 'author',
            cols: 1,
        },
        {
            img: require('../../../assets/images/Img_6.jpeg'),
            title: '1',
            author: 'author',
            cols: 1,
        },
        {
            img: require('../../../assets/images/Img_7.jpeg'),
            title: '1',
            author: 'author',
            cols: 1,
        },
        {
            img: require('../../../assets/images/Img_8.jpeg'),
            title: '1',
            author: 'author',
            cols: 2,
        },
        
    ]
    return (
        <div className={classes.root}>
            <GridList cellHeight={220} className={classes.gridList} cols={3} style={{ margin: '0px' }}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )

};

export default Gridview;
