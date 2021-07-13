/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Testimonial from './Testimonial';
import { makeStyles, Typography } from '@material-ui/core';

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
            message: "Cool cool cool..",
            name: "Monji Ben Tarek",
            city: "Ariana",
        },
        {
            rating: 4.5,
            message: "Ce site m'a vraiment aidé!",
            name: "Abdou Ben Salem",
            city: "Monastir",
        },
    ];

    return (
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
    )
}

export default Testimonials