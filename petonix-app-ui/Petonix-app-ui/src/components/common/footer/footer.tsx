import React from 'react';
import { makeStyles, createStyles, Theme, Typography, Grid, Box, Paper, Link } from '@material-ui/core';
import logo from '../../../assets/Logo-small.png';

const usestyles = makeStyles((theme: Theme) => createStyles({
    top_bot_padding: {
        paddingTop: '2%',
        paddingBottom: '2%'
    },
    textAligned_outerdiv: {
        textAlign: 'center'
    },
    textAlign_innerdiv: {
        display: 'inline-block'
    }
}))

function Footer() {

    const classes = usestyles()

    return (
        <Paper elevation={0}>
            <Grid container className={classes.top_bot_padding} justify='center'>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Grid container className={classes.top_bot_padding}>
                                <Grid item xs={4}>
                                    <Typography align='right'>
                                        <img src={logo} alt='logo' />
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container justify='flex-start' className={classes.top_bot_padding}>
                                        <Typography variant='body2' component='div' align='left' gutterBottom>
                                            <Box>
                                                Petonix provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                                            </Box>
                                        </Typography>
                                        <Typography variant='body2'  component='div' align='left'>
                                            <Box>
                                                ©Petonix India Pvt. Ltd. 2020. All rights reserved.
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={4} md={4} sm={12}>
                                    <div className={classes.textAligned_outerdiv}>
                                        <div className={classes.textAlign_innerdiv}>
                                            <Grid container justify='flex-start'>
                                                <Typography variant='h6' component='h6' align='left' color='primary' gutterBottom>
                                                    <Box >
                                                        Company
                                            </Box>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>About</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Testimonials</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Find a Doctor</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Apps</Link>
                                                </Typography>
                                            </Grid>
                                            </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} lg={4} md={4} sm={4}>
                                        <div className={classes.textAligned_outerdiv}>
                                        <div className={classes.textAlign_innerdiv}>
                                            <Grid container justify='flex-start'>
                                                <Typography variant='h6' component='h6' align='left' color='primary' gutterBottom>
                                                    <Box >
                                                        Region
                                            </Box>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Countries</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Countries</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Countries</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Countries</Link>
                                                </Typography>
                                            </Grid>
                                            </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} lg={4} md={4} sm={4}>
                                        <div className={classes.textAligned_outerdiv}>
                                        <div className={classes.textAlign_innerdiv}>
                                            <Grid container justify='flex-start'>
                                                <Typography variant='h6' component='h6' align='left' color='primary' gutterBottom>
                                                    <Box >
                                                        Help
                                            </Box>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Help Center</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Testimonials</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Find a Doctor</Link>
                                                </Typography>
                                            </Grid>
                                            <Grid container justify='flex-start'>
                                                <Typography gutterBottom>
                                                    <Link>Apps</Link>
                                                </Typography>
                                            </Grid>
                                            </div>
                                            </div>
                                        </Grid>

                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

};

export default Footer;