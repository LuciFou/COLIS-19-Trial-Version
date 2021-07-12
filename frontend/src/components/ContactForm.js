import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../../assets/css/ContactForm.css';
import '../../assets/css/HowItWorksSection.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { reclamer } from '../../actions/reclamations';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from '@material-ui/core';
// import { Divider, InputAdornment } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#82171f',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#82171f',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'primary',
            },
            '&:hover fieldset': {
                borderColor: '#242424',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#82171f',
            },
        },
    },
})(TextField);

const CssButton = withStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundColor: '#1c2237',
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            backgroundColor: '#82171f',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        height: '90vh',
    },
    paper: {
        margin: theme.spacing(8, 4.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    timelinePaper: {
        padding: '6px 16px',
        height: '100px',
        color: '#82171f',
        textAlign: 'center',
    },
    form: {
        width: '85%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(4, 0, 0),
    },
    howItWorks: {
        display: 'block',
    },
    timeline: {
        marginLeft: '-450px',
    },
    timelineDot: {
        // color: '#82171f',
        backgroundColor: '#82171f',
    },
    desc: {
        color: '#1c2237',
    },
    loader: {
        color: '#ffffff',
    },
    divider: {
        borderTop: '3px solid #82171f',
        width: '40%',
        marginBottom: '30px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    loading: {
        margin: theme.spacing(2, 0, 1, 0),
        cursor: 'not-allowed',
    },
}));

export default function ContactForm() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    const initState = {
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().max(255).required('Nom & Prénom sont obligatoires'),
        email: Yup.string().email('Email doit être valide').max(255).required('Email est obligatoire'),
        phone: Yup.string().length(8, 'Le N° de Téléphone doit contenir exactement 8 chiffres').required('N° de Téléphone est obligatoire'),
        city: Yup.string().max(255).required('Ville est obligatoire'),
        message: Yup.string().max(255).required('Addresse est obligatoire'),
    })

    // const [reclamation, setReclamation] = useState(initState);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(reclamer(reclamation));
    // };

    // const handleChange = (e) => {
    //     setReclamation({ ...reclamation, [e.target.name]: e.target.value });
    // };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={5} md={5} className={classes.howItWorks}>
                <Typography className='hiw-section-title' component="h1" variant="h5">
                    <h3>Comment ça marche?</h3>
                </Typography>
                <hr className={classes.divider} />
                <Timeline align="left" className={classes.timeline}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot className={classes.timelineDot}>
                                <PersonAddIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.timelinePaper}>
                                <Typography variant="h6" component="h1">
                                    Créez votre compte sur COLIS-19
                                </Typography>
                                <Typography className={classes.desc}>Inscrivez-vous sur notre plateforme afin de bénéficier de nos services.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot className={classes.timelineDot}>
                                <LocalShippingIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.timelinePaper}>
                                <Typography variant="h6" component="h1">
                                    Demandez une livraison
                                </Typography>
                                <Typography className={classes.desc}>Choisissez le service convenable.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot className={classes.timelineDot}>
                                <AssessmentIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.timelinePaper}>
                                <Typography variant="h6" component="h1">
                                    Suivez vos livraisons
                                </Typography>
                                <Typography className={classes.desc}>Reçevez des notifications en temps réel.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot className={classes.timelineDot}>
                                <CardGiftcardIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.timelinePaper}>
                                <Typography variant="h6" component="h1">
                                    Profitez de nos offres
                                </Typography>
                                <Typography className={classes.desc}>Gagnez des points de fidelité à chaque livraison.</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Grid>
            <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <h3>Contact</h3>
                    </Typography>
                    <hr className={classes.divider} />
                    <Formik
                        initialValues={initState}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            await setLoader(true);
                            await dispatch(reclamer(values, history));
                            await setLoader(false);
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            touched,
                        }) => (
                            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                <h6>Besoin d'aide ou d'informations ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.</h6>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nom & Prénom"
                                            name="name"
                                            autoComplete="name"
                                            onChange={handleChange}
                                            error={Boolean(touched.name && errors.name)}
                                            helperText={touched.name && errors.name}
                                            onBlur={handleBlur}
                                        // InputProps={{
                                        //     startAdornment: <InputAdornment position="start"><PersonAddIcon /></InputAdornment>,
                                        // }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Addresse Email"
                                            name="email"
                                            autoComplete="email"
                                            onChange={handleChange}
                                            error={Boolean(touched.email && errors.email)}
                                            helperText={touched.email && errors.email}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="phone"
                                            label="Numéro du téléphone"
                                            name="phone"
                                            autoComplete="tel"
                                            onChange={handleChange}
                                            error={Boolean(touched.phone && errors.phone)}
                                            helperText={touched.phone && errors.phone}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CssTextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="city"
                                            label="Ville"
                                            name="city"
                                            autoComplete="city"
                                            onChange={handleChange}
                                            error={Boolean(touched.city && errors.city)}
                                            helperText={touched.city && errors.city}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <CssTextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            type='text'
                                            id="message"
                                            label="Votre message"
                                            name="message"
                                            autoComplete="message"
                                            onChange={handleChange}
                                            error={Boolean(touched.message && errors.message)}
                                            helperText={touched.message && errors.message}
                                            onBlur={handleBlur}
                                            multiline
                                            rows='4'
                                        />
                                    </Grid>
                                </Grid>
                                {loader ? (
                                    <CssButton
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.loading}
                                    >
                                        <CircularProgress className={classes.loader} />
                                    </CssButton>
                                ) : (
                                    <CssButton
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Envoyer Message
                                    </CssButton>
                                )}
                            </form>
                        )}
                    </Formik>
                </div>
            </Grid>
        </Grid>
    );
}