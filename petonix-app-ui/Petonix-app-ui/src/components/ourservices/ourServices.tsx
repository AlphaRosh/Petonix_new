import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, Box, Container, Typography, GridList, GridListTile, Card, CardContent, CardMedia, Button, } from '@material-ui/core';
import userSearch from '../../assets/user-search.png';
import medicine from '../../assets/medicine.png';
import remoteConsult from '../../assets/remote-consult.png';
import petfood from '../../assets/pet food icon.png';
import emergencyCare from '../../assets/emergency-care.png';
import helthData from '../../assets/digital-health-data.png';
import background from '../../assets/bg element.png';
import './ourservice.css';
import { isMobile } from 'react-device-detect';
import Carousal from '../common/carousal/carousal';
import { CarousalProps } from '../common/interface/carousalProps';
import { CarousalPage } from '../common/interface/CarousalPage';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        back_ground: {
            backgroundImage: `url(${background})`
        },
        tile_card: {
            boxShadow: '0 0 10px 2px rgba(191, 130, 242, 0.55)',
            borderRadius: '20px',
            border: '1px solid',
            width: '95%',
            margin: '2%',
        },
        tile_card_media: {
            marginTop: '5%'
        },
        sepparator_line: {
            background: '#000000',
            borderRadius: '5px',
            width: '5%',
            height: '2px',
            marginTop: '1%',
            marginBottom: '1%',
            display: 'inline-block'
        },
        textAligned_outerdiv: {
            textAlign: 'center',

        },
        textAlign_innerdiv: {
            display: 'inline-block',
            width: '100%'
        },
        learn_more_btn: {
            borderRadius: '20px',
            border: '1.4px solid #6D4166',
            color: '#6D4166'

        },
        bottom_top_margin: {
            marginTop: '2%',
            marginBottom: '2%'
        },
        mobile_tile_card: {
            boxShadow: '0 0 10px 2px rgba(191, 130, 242, 0.55)',
            borderRadius: '20px',
            border: '1px solid',
            width: '100%',

            height: '100%'
        },

    })
)

const tileData = [
    { title: 'Vet Directory', content: "Choose your pet doctor from thousands of specialists, trusted hospitals and clinics", icon: userSearch, name: 'tile_1' },
    { title: 'Online Pharmacy', content: 'Buy your pet’s medicines with our mobile application with a simple delivery system', icon: medicine, name: 'tile_2' },
    { title: 'Remote Consultation', content: 'Get remote help for your pets by consulting our vets in case of medical emergencies', icon: remoteConsult, name: 'tile_3' },
    { title: 'Pet Food', content: ' Order nutritutional & affordable food for your pets from our dedicated pet food platform ', icon: petfood, name: 'tile_4' },
    { title: 'Emergency care', content: 'You can get 24/7 urgent medical care for your pets or adopted strays by contacting us ', icon: emergencyCare, name: 'tile_5' },
    { title: 'Digital Health Data', content: 'Track and save your pet’s medical history & health data at your finger tips', icon: helthData, name: 'tile_6' }
]

function OurServices() {

    const classes = useStyles();
    const [activeIndex, setactiveIndex] = useState<number>(0)

    const createCardDetails = (tile: any) => (
        <Card key={tile.name} variant="elevation" className={classes.mobile_tile_card} raised>
            <Typography align='left' component='div' style={{ marginTop: '11%', paddingLeft: '5%', paddingTop: '5%' }}>
                <Box>
                    <CardMedia>
                        <img src={tile.icon} alt={tile.name} />
                    </CardMedia>
                </Box>
            </Typography>
            <CardContent style={{ marginBottom: '15%', paddingTop: '10%' }}>
                <Typography align='left' component='h6'>
                    <Box fontWeight='fontWeightBold'>
                        {tile.title}
                    </Box>
                </Typography>
                <Typography align='left' component='div'>
                    <Box>
                        {tile.content}
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    )


    const createCard = (tile: any) => (
        <div className={classes.textAligned_outerdiv}>
            <div className={classes.textAlign_innerdiv}>
                {isMobile && createCardDetails(tile)}
                {!isMobile &&
                    <Card key={tile.name} variant="elevation" className={classes.tile_card} raised>
                        <Typography align='left' component='div' style={{ padding: '3%' }}>
                            <Box>
                                <CardMedia className={classes.tile_card_media}>
                                    <img src={tile.icon} alt={tile.name} />
                                </CardMedia>
                            </Box>
                        </Typography>
                        <CardContent>
                            <Typography align='left' component='h6'>
                                <Box fontWeight='fontWeightBold'>
                                    {tile.title}
                                </Box>
                            </Typography>
                            <Typography align='left' component='div'>
                                <Box>
                                    {tile.content}
                                </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                }
            </div>
        </div>
    )

    const pageDetails: CarousalPage[] = [
        {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            active: false,
            elementIn: true,
            image_name: '',
            id: 0,
            iselement: true,
            element: createCard(tileData[0])
        },
        {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            active: false,
            elementIn: false,
            image_name: '',
            id: 1,
            iselement: true,
            element: createCard(tileData[1])
        },
        {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            active: false,
            elementIn: false,
            image_name: '',
            id: 2,
            iselement: true,
            element: createCard(tileData[2])
        },
        {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            active: false,
            elementIn: false,
            image_name: '',
            id: 3,
            iselement: true,
            element: createCard(tileData[3])
        }, {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            active: false,
            elementIn: false,
            image_name: '',
            id: 4,
            iselement: true,
            element: createCard(tileData[4])
        },
        {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            active: false,
            elementIn: false,
            image_name: '',
            id: 5,
            iselement: true,
            element: createCard(tileData[5])
        }
    ]


    const leftClickHandle = (e: Event) => {

        const current: number = activeIndex;
        let next: number;

        if (current >= 1) {
            next = current - 1;
        }
        else {
            next = pageDetails.length - 1;
        }

        pageActive[current].active = false;
        pageActive[current].elementIn = false;

        pageActive[next].active = true;
        pageActive[next].elementIn = true;

        setactivePage(pageActive);

        setactiveIndex(next);
    }

    const rightClickHandle = (e: Event) => {

        const current: number = activeIndex;
        let next: number;

        if (current < pageDetails.length - 1) {
            next = current + 1;
        }
        else {
            next = 0;
        }

        pageActive[current].active = false;
        pageActive[current].elementIn = false;

        pageActive[next].active = true;
        pageActive[next].elementIn = true;

        setactivePage(pageActive);

        setactiveIndex(next);

    }

    const [pageActive, setactivePage] = useState<CarousalPage[]>(pageDetails);


    const carousalContent: CarousalProps = {
        activeIndex: activeIndex,
        pages: pageActive,
        leftClick: leftClickHandle,
        rightClick: rightClickHandle
    }

    return (
        <div id="background">
            <Container>
                <Grid container>
                    <Grid item sm={12} xs={12} lg={12} className={classes.bottom_top_margin}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            <Box fontWeight='fontWeightBold'>
                                Our Services
                            </Box>
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <div className={classes.sepparator_line}>

                            </div>
                        </div>

                        <Typography variant="body2" component="main" gutterBottom>
                            <Box>
                                Animals deserve good health care facilities the way we do. To empower the pet owners and adopters with a platform to provide reliable and quality health care services, Petonix tries to bring the best of medical facilities to you at the tip of your fingers.
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={12}>
                        {!isMobile &&
                            <GridList spacing={3} cols={3} cellHeight={250} key="tiles">
                                {tileData.map((tile) => {
                                    return (
                                        <Grid item sm={12} xs={12} md={4} lg={4} key={tile.name}>
                                            <GridListTile cols={1} key={tile.name}>
                                                {createCard(tile)}
                                            </GridListTile>
                                        </Grid>)
                                })
                                }

                            </GridList>}

                        {
                            isMobile &&
                            <Carousal {...carousalContent} />

                        }
                    </Grid>
                    <Grid container justify="center" spacing={2} >
                        <Grid item lg={12} sm={12} xs={12} md={12}>
                            <div className={classes.textAligned_outerdiv} hidden={true}>
                                <div className={classes.textAlign_innerdiv}>
                                    <Button variant='contained' color="secondary" className={classes.learn_more_btn}>Learn More</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export default OurServices;