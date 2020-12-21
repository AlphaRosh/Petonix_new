import React from 'react';
import { makeStyles, Theme, createStyles, Container, Grid } from '@material-ui/core';
import downloadImage from '../../assets/app download.png';
import CardComponent from '../common/card/cardComponent'
import { cardProps } from '../common/interface/card.Interface';

const useStyles = makeStyles((them: Theme) => createStyles({

}))

const clickHandler = (e?: Event) => {
    console.log(e)
}

const cardDetails: cardProps = {
    content: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously and securely - no tedious form, long calls or administrative hassles!',
    header: 'Download our mobile apps',
    button_text: 'Coming soon',
    clickHandle: () => clickHandler(),
    hasImage: false,
    elevate: 0,
    marginTop: true
}


function DownloadPage() {

    //const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <div>
                        <div>
                            <CardComponent
                                header={cardDetails.header}
                                content={cardDetails.content}
                                button_text={cardDetails.button_text}
                                hasImage={cardDetails.hasImage}
                                elevate={cardDetails.elevate}
                                clickHandle={() => cardDetails.clickHandle}
                                marginTop={true} />
                        </div>
                    </div>
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <img src={downloadImage} width='100%' alt='download_page_image' />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DownloadPage;