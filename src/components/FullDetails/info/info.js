import React from 'react';

const Info = ({ }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const style = {
        heading:{
            margin:0,
            paddingLeft:'5%',
            paddingRight:'5%'
        },
        para:{
            margin:0,
            paddingLeft:'5%',
            paddingRight:'5%',
            textAlign:'left'
        }
    }
    
    return (
        <div style={{height:'auto',flexDirection:'column',paddingTop:'5%',paddingBottom:'5%'}}>
                
                <h3 style={style.heading} >
                    1. J&B Associates
                </h3>
                <p style={style.para}>
                    Deals on all kinds of sale, purchase and lease of property in tricity.
                </p>
                <br/>

                <h3 style={style.heading} >
                    2. PC Services
                </h3>

                <p style={style.para}>

                Innovator and entrepreneur with 20 years in business leadership. Experienced in all aspects of business formation, operation, finance, and management. Visionary product developer with deep education in research and analytics. Effective communicator and motivator who identifies and leverages assets in teammates to reach organizational goals. Relentless optimist who believes there is no failure, only feedback.
                </p>
        
        </div>
    )

};

export default Info;
