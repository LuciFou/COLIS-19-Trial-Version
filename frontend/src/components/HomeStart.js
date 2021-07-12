import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import SwiperSlider from './SwiperSlider';

function HomeStart() {

    return (
        <>
            {/* <video src={vid} className='home__hero-vid' autoPlay loop muted></video> */}
            <div
                className='home__hero-section darkBg'
            >
                <Container className='container'>
                    <Grid container xs={12}>
                        <Grid
                            item
                            xs={12} sm={8} md={8}
                            className='row home__hero-row'
                            style={{
                                display: 'flex',
                                //   flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className='col'>
                                <div className='home__hero-text-wrapper'>
                                    <h1 className='heading dark'>
                                        Bienvenue dans notre site officiel
                                    </h1>
                                    <div className='top-line'>Votre colis est entre vos mains où que vous soyez.</div>
                                    <p
                                        className='home__hero-subtitle dark'
                                    >
                                        <p>
                                            COLIS-19 votre première solution pour expédier facilement vos colis en Tunisie.
                                        </p>
                                        <p>
                                            Vous pouvez les suivre en temps réel étape par étape.
                                        </p>
                                        <p>
                                            Vous avez l'opportunuté dés maintenant d'effectuer vos demandes de livraisons avec une grande simplicité ainsi que nos offres qui vont vous gâter.
                                        </p>
                                    </p>
                                    <Grid container xs={12} spacing={2}>
                                        <Grid item xs={12} sm={8} md={8}>
                                            <Link to='/services/send'>
                                                <Button buttonSize='btn--wide' buttonColor='beige'>
                                                    Envoyer un colis
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={8}>
                                            <Link to='/services/track'>
                                                <Button buttonSize='btn--wide' buttonColor='red'>
                                                    Suivre une livraison
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </div>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <SwiperSlider />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default HomeStart;
