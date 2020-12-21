import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles, Grid, CardContent, Card, CardMedia, Container, Typography, Box } from '@material-ui/core';
import step1Icon from '../../assets/Step 1 Icon.png';
import step2Icon from '../../assets/Step 2 Icon.png';
import step3Icon from '../../assets/Step 3 Icon.png';
import step4Icon from '../../assets/Step 4 Icon.png';
import step5Icon from '../../assets/Step 5 Icon.png';
import playIcon from '../../assets/play_circle_filled_white_24px.png'
import { isMobile } from 'react-device-detect';
import Carousal from '../common/carousal/carousal';
import { CarousalPage } from '../common/interface/CarousalPage';
import { CarousalProps } from '../common/interface/carousalProps';
import './steps.css'


const useStyles = makeStyles((theme: Theme) => createStyles({
    circular_card: {
        borderRadius: '50%',
        border: '2px solid',
        height: '250px',
        width: '250px',
        boxShadow: '0 0 10px 10px rgba(109, 65, 102, 0.3)',
    },
    textAlign_outterdiv: {
        display: 'block',
        marginTop: '4%',
    },
    textAlign_innerdiv: {
        display: 'inline-block'
    },
    card_icon: {
        marginTop: '5%'
    },
    image_width: {
        width: '50%'
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
    bottom_top_margin: {
        marginTop: '2%',
        marginBottom: '2%'
    },
    card_outer_div: {
        marginLeft: '6%'
    },
    card_top_block: {
        marginLeft: '12.5%',
        display: 'flex'
    },
    card_bottom_block: {
        marginLeft: '26.5%',
        display: 'flex'
    },
    circular_play_card: {
        borderRadius: '50%',
        height: '250px',
        width: '250px',
        position: 'relative',
        top: '55%',
        zIndex: 999
    },

}))

const tileData_upper = [
    { icon: step1Icon, content: 'Step 1 Tell us your pet’s health concern', name: 'tile_1' },
    { icon: step2Icon, content: 'Step 2 We suggest a vet from our pool in minutes', name: 'tile_2' },
    { icon: step3Icon, content: 'Step 3 Pay the consultation fee online using', name: 'tile_3' }
];
const tileData_lower = [
    { icon: step4Icon, content: 'Step 4 Get diagnosis, treatment & prescription ', name: 'tile_4' },
    { icon: step5Icon, content: 'Step 5 Order & Receive the prescribed medicines', name: 'tile_5' }
];

const tileData = [...tileData_upper, ...tileData_lower]


function Howto() {

    const classes = useStyles();
    const [activeIndex, setactiveIndex] = useState<number>(0);

    const createCard = (tile: any) => (
        <div className={classes.textAlign_outterdiv}>
            <div className={classes.textAlign_innerdiv}>
                <Card className={classes.circular_card} >
                    <CardMedia className={classes.card_icon}>
                        <img src={tile.icon} alt={tile.name} className={classes.image_width} />
                    </CardMedia>
                    <CardContent>
                        <Typography component='main'>
                            <Box>
                                {tile.content}
                            </Box>
                        </Typography>
                    </CardContent>
                </Card>
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

    const [topPos, settopPos] = useState('0%');
    const [rightPos, setrightPos] = useState('0em')
    const [visibility, setvisibility] = useState('0')

    useEffect(() => {
        const timer = setTimeout(() => {
            settopPos('56%')
            setrightPos('26em')
            setvisibility('0.3')
        }, 1000);
        return () => {
            clearTimeout(timer)
        };
    }, []);

    const createPlayButton = () => {
        return (
            <div>
                <div className={classes.textAlign_outterdiv}>
                    <div className={classes.textAlign_innerdiv}>
                        <div className={classes.circular_play_card} style={{ top: topPos, right: rightPos, opacity: visibility }}>

                            <img src={playIcon} width='100%' className='MuiButtonBase-root MuiButton-root' alt='play icon' />

                        </div>
                    </div>
                </div>
            </div>)
    }

    return (
        <Container className={classes.bottom_top_margin}>
            {!isMobile &&
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} lg={12}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            <Box fontWeight='fontWeightBold'>
                                How Virtual Pet Care Works?
                            </Box>
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <div className={classes.sepparator_line}>

                            </div>
                        </div>
                    </Grid>
                    <div className={classes.card_top_block}>
                        {tileData_upper.map(tile => {
                            return (
                                <div className={classes.card_outer_div} key={tile.name + '_tile'}>
                                    {createCard(tile)}
                                </div>
                            )
                        })
                        }
                    </div>
                    {createPlayButton()}
                    <div className={classes.card_bottom_block}>
                        {
                            tileData_lower.map((ltile) => {
                                return (
                                    <div className={classes.card_outer_div} key={ltile.name + '_tile'}>
                                        {createCard(ltile)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </Grid>
            }
            {
                isMobile &&
                <div>
                    <Grid container spacing={8}>
                        <Grid item sm={12} xs={12} lg={12}>
                            <Typography variant="h4" component="h2" gutterBottom>
                                <Box fontWeight='fontWeightBold'>
                                    How Virtual Pet Care Works?
                            </Box>
                            </Typography>
                            <div style={{ textAlign: 'center' }}>
                                <div className={classes.sepparator_line}>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Carousal {...carousalContent} />
                </div>
            }
        </Container>

    )
}

export default Howto;