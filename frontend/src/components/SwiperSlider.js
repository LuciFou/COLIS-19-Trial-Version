import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Divider from '@material-ui/core/Divider';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const servicesSteps = [
    {
        title: "Livraison à domicile",
        paragraph: "Quelques clics suffisent pour transporter votre colis à n'importe quel région en tunisie avec une flexibilité garantie et une sécurité optimale.",
        imgPath: 'images/deliver01.jpg',
    },
    {
        title: "Suivi des livraisons",
        paragraph: "Vous disposez d’un espace client personnalisé, protégé par un mot de passe et un identifiant unique, sans aucun logiciel à installer et accessible depuis notre site Web COLIS-19 qui permet de suivre l'état de votre livraison accompagné d'un système de notifications.",
        imgPath: 'images/track01.png',
    },
    {
        title: "Restez chez vous",
        paragraph: "Si vous voulez envoyer un colis ne vous inquiètez pas, un livreur de COLIS-19 porte la responsabilité pour récupérer votre colis de chez vous et le transporter jusqu'a votre destination souhaitée.",
        imgPath: 'images/handover01.jpg',
    },
    {
        title: "Collectez et gagnez",
        paragraph: "Avec COLIS-19 vous serez gatés, à chaque fois que vous envoyez un colis via notre site vous gagnez 50 points de fidélités: avec 500 points vous pouvez envoyer gratuitement un colis et avec 1000 points vous entrez dans un tirage au sort pour gagner un cadeau.",
        imgPath: 'images/gift01.jpg',
    },
    {
        title: "Rejoignez nous",
        paragraph:
            <>
                Vous avez un permis de conduire une voiture commerciale et vous voulez rejoindre l’équipe COLIS-19 ? Vous souhaitez travaillez en tant que livreur ou bien employé? N’hésitez pas à remplir le <a href="/carrier" style={{ textDecoration: 'none', color: '#c70f1b' }}>formulaire suivant</a>
            </>,
        imgPath: 'images/recrute01.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 400,
        width: '450px',
        flexGrow: 1,
    },
    headerPaper: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        fontSize: '30px',
        color: '#82171f',
        borderRadius: '10px',
    },
    header: {
        fontSize: '25px',
        color: '#82171f',
        fontWeight: 700,
    },
    paragraphPaper: {
        display: 'flex',
        alignItems: 'center',
        height: 180,
        padding: theme.spacing(2, 4),
        backgroundColor: theme.palette.background.default,
        borderRadius: '10px 10px 0px 0px',
    },
    paragraph: {
        fontSize: '16px',
        color: '#1c2237',
    },
    img: {
        height: 300,
        display: 'block',
        maxWidth: '450px',
        overflow: 'hidden',
        width: '100%',
        borderRadius: '10px',
    },
    divider: {
        height: '8px',
        backgroundColor: 'transparent',
    },
}));

function SwiperSlider() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = servicesSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.headerPaper}>
                <Typography className={classes.header}>{servicesSteps[activeStep].title}</Typography>
            </Paper>
            <Divider className={classes.divider} />
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {servicesSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <Divider className={classes.divider} />
            <Paper square elevation={0} className={classes.paragraphPaper}>
                <Typography className={classes.paragraph}>{servicesSteps[activeStep].paragraph}</Typography>
            </Paper>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Suivant
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Précédent
                    </Button>
                }
            />
        </div>
    );
}

export default SwiperSlider;