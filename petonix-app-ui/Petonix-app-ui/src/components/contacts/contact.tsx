import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, Container, Grid, Typography, Box, Paper, GridList, GridListTile, TextField,  Button, Checkbox } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) => createStyles({
    sepparator_line: {
        background: '#000000',
        borderRadius: '5px',
        width: '5%',
        height: '2px',
        marginTop: '1%',
        marginBottom: '1%',
        display: 'inline-block'
    },
    paper_border: {
        boxShadow:'0px 0px 10px #6D4166',
        borderRadius: '30px'
    },
    container_padding:{
        padding:'2%'
    }
}))

const paperContent = [
    { details: 'Provide health care facilities to animals across the country', name:'first' },
    { details: 'Provide visibility of your service to a wider set of pet patients', name:'second' },
    { details: 'Deliver a personal experience that animals and their caretakers would love',name:'third' },

]




function Contactform() {

    const classes = useStyles();

    const [checked, setchecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked(event.target.checked);
      };

    return (
        <Container className={classes.container_padding}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify='center'>
                        <Grid item xs={12}>
                            <Typography variant='h4' component='h2'>
                                <Box fontWeight='fontWeightBold'>
                                    List your Service
                                </Box>
                            </Typography>
                            <div style={{ textAlign: 'center' }}>
                                <div className={classes.sepparator_line}>

                                </div>
                            </div>
                            <Typography variant="body2" component="main" gutterBottom>
                                <Box>
                                    We believe - no animal should suffer because of lack of health care facility near to their location.
                            </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container_padding} spacing={1}>
                        <Grid item xs={12} sm={12} lg={8} md={8}>
                            <Paper className={classes.container_padding +' '+classes.paper_border}>
                                <Typography variant='h4' component='h2' gutterBottom align='left'> 
                                    <Box fontWeight='fontWeightBold'>
                                        Are you a practising vet?
                                    </Box>
                                </Typography>
                                <Typography variant='h6' component='div' gutterBottom align='left'>
                                    <Box>
                                        List your practice on Petonix to react a wider client base!
                                    </Box>
                                </Typography>

                                <GridList cols={1} cellHeight={50}>
                                    {paperContent.map((content) => {
                                        return (
                                            <GridListTile cols={1} key={content.name}>
                                                <Typography align='left' component='div'>
                                                    <Box>
                                                    {content.details}
                                                    </Box>
                                                </Typography>
                                            </GridListTile>
                                        )
                                    })}
                                </GridList>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4} md={4}>
                            <Grid container justify='flex-start'>
                                <form noValidate autoComplete="off">
                                    <Grid item xs={12}>
                                        <TextField
                                            id="standard-secondary"
                                            label="Standard secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-secondary"
                                            label="Filled secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-secondary"
                                            label="Outlined secondary"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify='flex-start'>
                                        <div className='checkbox'>
                                            <label>
                                                <Checkbox onChange={handleChange} checked={checked} color='primary'></Checkbox>
                                                <Typography variant='body2' component='div'>
                                                    <Box>
                                                    I accept to the <a href='/'> Terms & conditions</a> to partner with Petonix
                                                    </Box>
                                                </Typography>
                                                </label>
                                        </div>
                                        <Button variant='contained' color='primary' size='large'>
                                            <Typography component='div'>
                                                <Box>
                                                    Enquire Now
                                        </Box>
                                            </Typography>
                                        </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )

}


export default Contactform;