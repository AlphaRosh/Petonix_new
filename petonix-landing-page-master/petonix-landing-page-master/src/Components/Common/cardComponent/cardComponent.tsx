import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme, Card, CardContent, Typography, Box, CardActions, Button, CardMedia } from '@material-ui/core';
import { cardProps } from '../interface/card.Interface';

const useStyles = makeStyles((theme: Theme) => createStyles(
    {
        card_content: {
            marginTop: '20%',
        },
        card_button: {
            border: '1px Solid',
            borderRadius: '20px'
        },
        bottom_top_margin: {
            marginTop: '2%',
            marginBottom: '2%'
        },
        Card_align: {
            height: '100%',
            textAlign: 'left',
            marginTop: '2%'
        },
        image_border: {
            width: '100%',
            borderRadius: '20px 20px 0px 0px'
        }
    }
))

const CardComponent: React.FunctionComponent<cardProps> = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.Card_align} elevation={props.elevate}>
            {props.hasImage &&
                <CardMedia>
                    <img className={classes.image_border} src={props.image} alt='image_name' />
                </CardMedia>}
            <CardContent className={props.marginTop ? classes.card_content : ''}>
                <Typography variant='h6' component='header' gutterBottom>
                    <Box fontWeight='fontWeightBold'>
                        {props.header}
                    </Box>
                </Typography>
                <Typography variant='body2' component='main'>
                    <Box>
                        {props.content}
                    </Box>
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='primary' className={[classes.card_button, props.button_type].join(' ')} onClick={(e) => props.clickHandle(e)}>
                    {props.button_text}</Button>
            </CardActions>
        </Card>
    )
}

export default CardComponent;