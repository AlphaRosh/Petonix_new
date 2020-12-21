import React from 'react';
import { Grid, Container, createStyles, Theme, makeStyles } from '@material-ui/core';
import Intro from '../../intro/intro';
import OurServices from '../../ourservices/ourServices';
import {isMobile} from 'react-device-detect'
import Pharmacy from '../../pharmacy/pharmacy';
import Howto from '../../steps/steps';
import DownloadPage from '../../downloadPage/donwloadPage';
import CustomerReview from '../../customerReview/customerReview';
import Blogarticles from '../../blogarticles/blogarticles';
import Contactform from '../../contacts/contact';
import Footer from '../footer/footer';

const useStyles = makeStyles((theme: Theme)=>
createStyles({
    top_margin_mobile:{
    },
    top_margin_desktop:{
        marginTop:'5%',
    }, 
    min_top_margin:{
      marginTop:'5%'
    }
})
)


function Main(){

    const classes = useStyles();

    return(
      <div  key='main-outer'>
        <main className={isMobile?classes.top_margin_mobile:classes.top_margin_desktop}>
        <Grid key='into' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
          <Container>
            <Intro></Intro>
          </Container>
        </Grid>
        <Grid key='services' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
            <OurServices></OurServices>
        </Grid>
        <Grid key='pharmacy' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
          <Pharmacy />
        </Grid>
        <Grid key='steps' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
        <Howto />
        </Grid>
        {!isMobile &&
        <Grid item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
          <DownloadPage />
        </Grid>
}
        <Grid key='reviews' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
          <CustomerReview />
        </Grid>
        <Grid key='blog' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
          <Blogarticles />
        </Grid>
        <Grid key='contact' item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
        <Contactform />
        </Grid>
          </main>
          <footer>
          <Grid item sm={12} md={12} lg={12} xs={12} className={classes.min_top_margin}>
          <Footer />
        </Grid>
          </footer>
      </div>
    )

}

export default Main;
