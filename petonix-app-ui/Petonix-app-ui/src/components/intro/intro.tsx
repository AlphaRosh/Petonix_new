import React from 'react';
import { Grid, makeStyles, Theme, createStyles, Container } from '@material-ui/core';
import mainImage from '../../assets/illustration 1.png'
import CardComponent from '../common/card/cardComponent';
import { cardProps } from '../common/interface/card.Interface';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        intro_card: {
            justifyContent: 'center',
            alignContent: 'center',
            display: 'grid'
        },
        image_margin: {
            marginTop: '20%'
        }
    }))

const clickHandler = (e?: Event) => {
    console.log('Consult Today')
}

const cardDetails: cardProps = {
    content: 'Petonix provides progressive, and affordable healthcare, accessible on mobile and online for your pets. ',
    header: 'Virtual Healthcare for your pets',
    button_text: 'Consult Now',
    button_type: 'MuiButton-containedPrimary',
    clickHandle: () => clickHandler(),
    hasImage: false,
    elevate: 0,
    marginTop: true

}

function Intro() {

    const classes = useStyles();

    return (
        <Container>
            {!isMobile &&
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} className={classes.intro_card}>
                        <CardComponent
                            header={cardDetails.header}
                            content={cardDetails.content}
                            button_text={cardDetails.button_text}
                            button_type={cardDetails.button_type}
                            hasImage={cardDetails.hasImage}
                            elevate={cardDetails.elevate}
                            clickHandle={() => cardDetails.clickHandle}
                            marginTop={true} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div>
                            <img width="100%" src={mainImage} alt='intro_image' />
                        </div>
                    </Grid>
                </Grid>}
            {
                isMobile &&
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} className={classes.image_margin}>
                        <div>
                            <img width="100%" src={mainImage} alt='intro_image' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.intro_card}>
                        <CardComponent
                            header={cardDetails.header}
                            content={cardDetails.content}
                            button_text={cardDetails.button_text}
                            button_type={cardDetails.button_type}
                            hasImage={cardDetails.hasImage}
                            elevate={cardDetails.elevate}
                            clickHandle={() => cardDetails.clickHandle}
                            marginTop={false} />
                    </Grid>
                </Grid>
            }
        </Container>

    )

}

export default Intro;