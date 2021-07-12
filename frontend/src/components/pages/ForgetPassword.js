import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

// const CssCheckbox = withStyles({
//   root: {
//     color: '#1c2237',
//     '&$checked': {
//       color: '#82171f',
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${"images/bg17.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%",
        borderTop: '50px solid transparent',
        borderBottom: '50px solid transparent',
        // backgroundColor: '#fff'
    },
    paper: {
        marginTop: theme.spacing(0),
        marginRight: -150,
        marginLeft: -150,
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '400px',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#82171f'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        backgroundColor: '#fff'
    },
    submit: {
        width: '60%',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block',
        height: '50px',
        fontSize: '15px'
    },
    message: {
        fontSize: '18px',
        fontWeight: 'lighter',
        marginTop: '20px'
    },
    alert: {
        marginTop: '20px',
    },
    loader: {
        color: '#ffffff',
    },
    loading: {
        margin: theme.spacing(2, 0, 1, 0),
        cursor: 'not-allowed',
    },
}));

export default function ForgetPassword() {

    const classes = useStyles();
    const [loader, setLoader] = useState(false);

    const initState = {
        email: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Cet email n'est pas valide").max(255).required('Email est obligatoire'),
    })

    return (
        <>
            <Helmet>
                <title>Rétablir Mot de Passe | COLIS-19</title>
            </Helmet>
            <div className={classes.paperContainer}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Mot de passe oublié??
                        </Typography>
                        <h4 className={classes.message}>
                            Veuillez saisir votre adresse e-mail pour demander une réinitialisation de mot de passe.</h4>
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
                                    <CssTextField
                                        className={classes.margin}
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={handleChange}
                                        error={Boolean(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                        onBlur={handleBlur}
                                    />

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
                                            Envoyer le lien de réinitialisation
                                        </CssButton>
                                    )}
                                </form>
                            )}
                        </Formik>
                    </div>
                </Container>
            </div>
        </>
    );
}