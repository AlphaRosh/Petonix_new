import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography, Box, } from '@material-ui/core';
import { cardProps } from '../common/interface/card.Interface';
import CardComponent from '../common/card/cardComponent';
import blog_1 from '../../assets/blog_1.png';
import blog_2 from '../../assets/blog_2.png';
import blog_3 from '../../assets/blog_3.png';
import { isMobile } from 'react-device-detect';
import Carousal from '../common/carousal/carousal';
import { CarousalProps } from '../common/interface/carousalProps';
import { CarousalPage } from '../common/interface/CarousalPage';

const useStyles = makeStyles((theme: Theme) => createStyles({

    sepparator_line: {
        background: '#000000',
        borderRadius: '5px',
        width: '5%',
        height: '2px',
        marginTop: '1%',
        marginBottom: '1%',
        display: 'inline-block'
    }
}));

const clickHandler = (e?: Event) => {
    console.log(e)
}

const cardDetails: cardProps[] = [{
    content: 'In this case, the role of the health laboratory is very important to do a disease detection...',
    header: 'Disease detection, check up in the laboratory',
    button_text: 'Read More',
    clickHandle: (e: Event) => clickHandler(e),
    name: 'card1',
    hasImage: true,
    image: blog_1,
    elevate: 3,
    marginTop: true
},
{
    content: 'Herbal medicine is very widely used at this time because of its very good for your health...',
    header: 'Herbal medicines that are safe for consumption',
    button_text: 'Read More',
    clickHandle: (e: Event) => clickHandler(e),
    name: 'card2',
    hasImage: true,
    image: blog_2,
    elevate: 3,
    marginTop: true
},
{
    content: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
    header: 'Natural care for healthy facial skin',
    button_text: 'Read More',
    clickHandle: (e: Event) => clickHandler(e),
    name: 'card3',
    hasImage: true,
    image: blog_3,
    elevate: 3,
    marginTop: true

}
]

function Blogarticles() {


    const classes = useStyles()
    const [activeIndex, setactiveIndex] = useState<number>(0);


    const createCard = (cardDetail: cardProps) => (
        <Grid key={cardDetail.name} item sm={12} xs={12} md={4} lg={4}>
            <CardComponent
                {...cardDetail}
            />
        </Grid>
    )

    const carousalPages: CarousalPage[] = [
        {
            header: '',
            body: '',
            image: '',
            ifImage: false,
            footer: '',
            image_name: '',
            active: true,
            elementIn: true,
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
            image_name: '',
            active: false,
            elementIn: false,
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
            image_name: '',
            active: false,
            elementIn: false,
            id: 2,
            iselement: true,
            element: createCard(cardDetails[2])
        },
    ]

    const leftClickHandler = (e: Event) => {
        const current: number = activeIndex;
        let next: number;

        if (current >= 1) {
            next = current - 1;
        }
        else {
            next = carousalPages.length - 1;
        }

        pageActive[current].active = false;
        pageActive[current].elementIn = false;

        pageActive[next].active = true;
        pageActive[next].elementIn = true;

        setactivePage(pageActive);

        setactiveIndex(next);
    }

    const riightClickHandler = () => {
        const current: number = activeIndex;
        let next: number;

        if (current < carousalPages.length - 1) {
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

    const [pageActive, setactivePage] = useState<CarousalPage[]>(carousalPages);

    const carousalDetails: CarousalProps = {
        activeIndex: 0,
        pages: pageActive,
        leftClick: leftClickHandler,
        rightClick: riightClickHandler
    };

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12} lg={12}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        <Box fontWeight='fontWeightBold'>
                            Check out our latest artciles
                            </Box>
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <div className={classes.sepparator_line}>

                        </div>
                    </div>
                </Grid>
                {!isMobile &&
                    <Grid item xs={12}>
                        <Grid container spacing={4}>

                            {cardDetails.map((cardDetail) => {
                                return (
                                    <Grid key={cardDetail.name} item sm={12} xs={12} md={4} lg={4}>
                                        <CardComponent
                                            {...cardDetail}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </Grid>
                }
                {isMobile &&
                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Carousal {...carousalDetails} />
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Container>
    )
}

export default Blogarticles;