import { makeStyles } from '@material-ui/core';
import React from 'react';
import CritereCard from './CritereCard';
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        padding: '50px 50px'
    },
    typo: {
        marginBottom: '40px',
        color: '#1c2237'
    },
    divider: {
        borderTop: '3px solid #82171f',
        width: '40%',
        marginBottom: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

const criteresSteps = [
    {
        title: "LA RAPIDITÉ",
        paragraph: "L'équipe COLIS-19 est toujours prête pour vous répondre à l'heure.",
        imgPath: 'images/speed.jpg',
    },
    {
        title: "LA SÉCURITÉ DE VOS COLIS",
        paragraph: "Les colis sont transportés sous un cadre professionnel et sous votre suivi en temps réel.",
        imgPath: 'images/secure.jpg',
    },
    {
        title: "LA CONFIANCE",
        paragraph: "Vos colis sont sous notre responsabilité et ne seront jamais ouverts ou cassés.",
        imgPath: 'images/confiance.jpg',
    },
    {
        title: "LE RESPECT DE VOS DÉLAIS",
        paragraph: "Des délais de livraison  variant de 4h à 24h à partir de la date et l'heure de récupération.",
        imgPath: 'images/delai.jpg',
    },
    {
        title: "LE PROFESSIONNALISME",
        paragraph: "Nos livreurs sont tous bien selectionnés.",
        imgPath: 'images/pro.jpg',
    },
];

function CritereSection() {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.typo} component="h1" variant="h5">
                <h3>Nos Critères</h3>
            </Typography>
            <hr className={classes.divider} />
            <Grid container spacing={2}>
                {criteresSteps.map((step) => (
                    <Grid item xs={12} md>
                        <CritereCard
                            title={step.title}
                            paragraph={step.paragraph}
                            img={step.imgPath}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CritereSection
