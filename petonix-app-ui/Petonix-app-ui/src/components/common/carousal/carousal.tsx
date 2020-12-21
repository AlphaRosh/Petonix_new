import React from 'react';
import { makeStyles, createStyles, Theme, Container, Grid, Paper, Slide, Radio, RadioGroup, Button, FormControl } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CarousalProps } from '../interface/carousalProps';
import { CarousalPage } from '../interface/CarousalPage';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme: Theme) => createStyles({
    hidden: { display: 'none' },
    show: { display: 'block' },
    slider_size: {
        width: '64.8%',
        position: 'absolute',
        height: '36.6%',
        zIndex: 99
    }

}))

const getPageSlider = (page: CarousalPage) => {
    return (
        <Slide direction='left' in={page.elementIn} key={page.id + '_name'} >
            <div>
                {page.elementIn && <Paper>
                    {page.header}
                    {page.body}
                    {page.ifImage && <img src={page.image} alt={page.image_name} />}
                    {page.footer}
                </Paper>}
            </div>

        </Slide>
    )
}

const Carousal: React.FC<CarousalProps> = (props: CarousalProps) => {

    const classes = useStyles();
    const pageSlider = (e: CarousalPage) => getPageSlider(e);


    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Paper variant='elevation' elevation={0} style={{ backgroundColor: 'transparent' }}>
                        {props.pages.map((page: CarousalPage) => {
                            return (
                                <div key={page.id+'_outer_slide'}>
                                    <div className={page.iselement === false ? classes.show : classes.hidden}>
                                        {pageSlider(page)}
                                    </div>
                                    <div className={page.iselement ? classes.show : classes.hidden}>
                                        <Slide direction='left' in={page.elementIn} key={page.id + '_name'}>
                                            <div key={page.id+'_name'}>
                                                {page.elementIn && page.element}
                                            </div>
                                        </Slide>
                                    </div>
                                </div>
                            )
                        })}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item md={4} lg={4} sm={4} xs={4}>
                            <Grid container justify='flex-end'>
                                <Grid item>
                                    <Button onClick={(e) => props.leftClick(e)}>
                                        <ArrowBackIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={4} lg={4} sm={4} xs={4}>
                            <Grid container justify='center'>
                                <Grid item>
                                    {!isMobile &&
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="pages" name="pages1" row onChange={handleChanges}>
                                                {props.pages.map((page: CarousalPage) => {
                                                    return (
                                                        <Radio
                                                            checked={page.elementIn}
                                                            onChange={handleChanges}
                                                            value={page.id}
                                                            color='primary'
                                                            key={page.id+'_radio'}
                                                        />
                                                    )
                                                })}
                                            </RadioGroup>
                                        </FormControl>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={4} lg={4} sm={4} xs={4}>
                            <Grid container justify='flex-start'>
                                <Button onClick={(e) => props.rightClick(e)}>
                                    <ArrowForwardIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Carousal;