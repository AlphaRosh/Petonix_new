import React from 'react';
import { makeStyles, createStyles, Theme, Grid, Container } from '@material-ui/core';
import sectionImage from '../../assets/section_3_main.png';
import CardComponent from '../common/card/cardComponent';
import { cardProps } from '../common/interface/card.Interface';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme: Theme) => createStyles({
    bottom_top_margin: {
        marginTop: '2%',
        marginBottom: '2%'
    },
}));

const clickHandler = (e?: Event) => {
    console.log('Coming Soon')
}

const cardDetails: cardProps = {
    header: ' Online Pharmacy for your pets',
    content: 'Petonix delivers medicines for your pets at your doorsteps. Be it medicines, health supplements or nutritious food, we have them all.',
    button_text: 'Coming Soon',
    button_type: 'MuiButton-containedPrimary',
    clickHandle: () => clickHandler(),
    hasImage: false,
    elevate: 0,
    marginTop: true
}

function Pharmacy() {

    const classes = useStyles();

    const crerateGrid = () => (
        <Grid container spacing={2} justify='center'>
            <Grid item xs={12} sm={12} lg={8} md={8}>
                <img src={sectionImage} alt='pharmacy_image' width='100%' />
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4}>
                <CardComponent
                    header={cardDetails.header}
                    content={cardDetails.content}
                    button_type={cardDetails.button_type}
                    button_text={cardDetails.button_text}
                    hasImage={cardDetails.hasImage}
                    elevate={cardDetails.elevate}
                    clickHandle={() => cardDetails.clickHandle}
                    marginTop={isMobile ? false : true} />
            </Grid>
        </Grid>
    )

    return (
        <Container className={classes.bottom_top_margin}>
            {!isMobile &&
                crerateGrid()
            }

            {
                isMobile &&
                crerateGrid()
            }
        </Container>
    )

}

export default Pharmacy;