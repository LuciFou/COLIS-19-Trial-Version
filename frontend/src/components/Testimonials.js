/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import Testimonial from './Testimonial';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(15),
        display: 'flex',
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottom: '2px solid #939393',
        marginBottom: '60px',
        paddingBottom: '60px',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    typo: {
        textAlign: 'center',
        fontFamily: 'Gill Sans Extrabold, sans-serif',
        fontWeight: '700',
        borderBottom: '2px solid #939393',
        marginBottom: '60px',
        paddingBottom: '60px',
        color: '#1c2237',
    },
}));

function Testimonials() {

    const classes = useStyles();

    let feedbacks = [
        {
            rating: 4.5,
            message: "This is so amazing!!!",
            name: "Fourat Abdellatif",
            city: "Kelibia",
        },
        {
            rating: 4.5,
            message: "This is so amazing!!!",
            name: "Fourat Abdellatif",
            city: "Kelibia",
        },
        {
            rating: 4.5,
            message: "This is so amazing!!!",
            name: "Fourat Abdellatif",
            city: "Kelibia",
        },
    ];
    const stats = useSelector((state) => state.stats);

    if (stats)
        feedbacks = stats[7];

    console.log('feedbacks: ' + feedbacks)

    return feedbacks?.length > 2 ? (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <Typography
                            gutterBottom
                            variant="h4"
                            className={classes.typo}
                        >
                            Ce Que Nos Clients Pensent De Nous
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} spacing={5}>
                        {feedbacks?.map((feedback) => (
                            <Grid key={feedback._id} item xs={12} md={4}>
                                <Testimonial feedback={feedback} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>
    ) : (
        null
    );
}

export default Testimonials