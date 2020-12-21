import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, Card, CardContent, Typography, Box, Grid } from '@material-ui/core';
import Carousal from '../common/carousal/carousal';
import { CarousalProps } from '../common/interface/carousalProps';
import { CarousalPage } from '../common/interface/CarousalPage';
import avatar1 from '../../assets/avatar_1.png';
import './customerreview.css';

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

const createCard = (cardData: any) => {

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Card key={cardData.id} id='review_card' elevation={0}>
                    <CardContent>
                        <Typography component='header' variant='h4' color='secondary' gutterBottom>
                            <Box>
                                {cardData.header}
                            </Box>
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <div id='sepparator_line'>

                            </div>
                        </div>
                        <Grid container spacing={2} justify='center'>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Grid container>
                                    <Grid item lg={6} md={6} xs={12} sm={12}>
                                        <Grid container justify='flex-end'>
                                            <img src={cardData.image} alt='customer_img' />
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={6} md={6} xs={12} sm={12}>
                                        <Grid container justify='center'>
                                            <Grid item>
                                                <Typography align='left' component='div' style={{ marginTop: '35%' }} color='secondary'>
                                                    <Box>
                                                        {cardData.name}
                                                    </Box>
                                                </Typography>
                                                <Typography component='div' align='left' color='secondary'>
                                                    <Box>
                                                        {cardData.user_title}
                                                    </Box>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>

                                <Typography align='left' style={{ marginTop: '5%' }} color='secondary'>
                                    {cardData.body}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

const cardDetails = [
    {
        id: 0,
        header: 'What our customers are saying',
        body: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
        image: avatar1,
        name: 'Edward Newgate',
        user_title: 'Founder Circle'
    },
    {
        id: 1,
        header: 'What our customers are saying',
        body: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
        image: avatar1,
        name: 'Edward Newgate',
        user_title: 'Founder Circle'
    },
    {
        id: 2,
        header: 'What our customers are saying',
        body: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
        image: avatar1,
        name: 'Edward Newgate',
        user_title: 'Founder Circle'
    },
    {
        id: 3,
        header: 'What our customers are saying',
        body: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
        image: avatar1,
        name: 'Edward Newgate',
        user_title: 'Founder Circle'
    },
    {
        id: 4,
        header: 'What our customers are saying',
        body: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
        image: avatar1,
        name: 'Edward Newgate',
        user_title: 'Founder Circle'
    }
];

const pageDetails: CarousalPage[] = [
    {
        header: '',
        body: '',
        image: '',
        ifImage: false,
        footer: '',
        active: true,
        elementIn: true,
        image_name: '',
        id: 0,
        iselement: true,
        element: createCard(cardDetails[0])
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
        element: createCard(cardDetails[1])
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
        element: createCard(cardDetails[2])
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
        element: createCard(cardDetails[3])
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
        element: createCard(cardDetails[4])
    }
]


function CustomerReview() {

    //const classess = useStyles();
    const [activeIndex, setactiveIndex] = useState<number>(0);

    const handleLeftClick = (e: any) => {
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

    const handleRightClick = (e: any) => {
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

    const carousalDetails: CarousalProps = {
        leftClick: handleLeftClick,
        rightClick: handleRightClick,
        pages: pageActive,
        activeIndex: 0
    }

    return (
        <Carousal {...carousalDetails} />
    )
}

export default CustomerReview;