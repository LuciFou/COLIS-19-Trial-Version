import React from 'react';
import '../../../App.css';
import ServicePick from './ServicePick';
import { Helmet } from "react-helmet";
import { makeStyles, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';


const useStyles = makeStyles({
    divider: {
        borderTop: '3px solid #82171f',
        width: '40%',
        marginBottom: '30px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})

export default function Services() {

    const classes = useStyles();

    return (
        <>
            <Helmet>
                <title>Services | COLIS-19</title>
            </Helmet>
            <ServicePick />
            <Divider style={{ height: '2px', backgroundColor: '#82171f' }} />
            <Typography className='hiw-section-title' component="h1" variant="h5">
                <h3>Nos Dernières Actualités</h3>
            </Typography>
            <hr className={classes.divider} />
        </>
    )
}