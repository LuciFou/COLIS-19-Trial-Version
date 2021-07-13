import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import FeedbacksAvg from './FeedbacksAvg';
import { MDBIcon } from 'mdbreact';

const useStyles = makeStyles({
    delivery: {
        fontSize: '50px',
        width: '280px',
        fontFamily: '"Trebuchet MS", sans-serif',
        color: '#1c2237',
    },
    hours: {
        fontWeight: '800',
    },
    deliveryTruck: {
        fontSize: '45px',
        color: '#1c2237',
        marginLeft: '-50px',
    },
});

function StatsSection() {

    const classes = useStyles();

    return (
        <Container>
            <Grid container xs={12}>
                <Grid item xs={12} sm={4} md={4}>
                    <div className={classes.delivery}>
                        Livraison en <div className={classes.hours}>24/48H</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <div className={classes.deliveryTruck}>
                        <MDBIcon icon="truck" size="4x" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <FeedbacksAvg />
                </Grid>
            </Grid>
        </Container>
    )
}

export default StatsSection
