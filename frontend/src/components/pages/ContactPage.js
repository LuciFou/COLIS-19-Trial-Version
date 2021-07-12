import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../../assets/css/ContactPage.css';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CircularProgress } from '@material-ui/core';


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
                borderColor: '#1c2237',
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
        height: '100vh',
    },
    contact: {
        width: '20%'
    },
    paper: {
        margin: theme.spacing(8, 4.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '85%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(3, 0, -5),
    },
    loader: {
        color: '#ffffff',
    },
    loading: {
        margin: theme.spacing(2, 0, 1, 0),
        cursor: 'not-allowed',
    },
}));

export default function ContactPage() {

    const classes = useStyles();
    const [loader, setLoader] = useState(false);

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
    });

    // const [reclamation, setReclamation] = useState(initState);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(reclamer(reclamation));
    // };

    // const handleChange = (e) => {
    //     setReclamation({ ...reclamation, [e.target.name]: e.target.value });
    // };

    return (
        <>
            <Helmet>
                <title>Contact | COLIS-19</title>
            </Helmet>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={4} md={4} className={classes.contact}>
                    <div class='contact-section'>
                        <h2>contact</h2>
                        <hr class="solid" />
                        <div className="contact-icons">
                            <i class="fas fa-map-marker-alt"></i>
                            <span> 20 Rue de la Liberté</span>
                        </div>
                        <div className="contact-icons">
                            <i class="fas fa-phone-alt"></i>
                            <span> Service Client</span>
                            <br />
                            <p><a href="tel:+21655742938">(+216) 55742938</a> | <a href="tel:+21626699906">(+216) 26699906</a></p>
                        </div>
                        <div className="contact-icons">
                            <i class="fas fa-phone-alt"></i>
                            <span> Service Commercial</span>
                            <br />
                            <p><a href="tel:+21655742938">(+216) 55742938</a> | <a href="tel:+21626699906">(+216) 26699906</a></p>
                        </div>
                        <div className="contact-icons">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:colis-19@hotmail.com"> colis-19@hotmail.com</a>
                        </div>
                        <div className="contact-icons">
                            <i class="far fa-clock"></i>
                            <span> Lun- Sam: 9:00 - 18:00</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            <h3>Formulaire de Contact</h3>
                        </Typography>
                        <Formik
                            initialValues={initState}
                            validationSchema={validationSchema}
                            onSubmit={async (values) => {
                                await setLoader(true);
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
                                        <Grid item xs={12} sm={12}>
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
                                            // autoFocus
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
                                        <Grid item xs={12} sm={12}>
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
        </>
    );
}