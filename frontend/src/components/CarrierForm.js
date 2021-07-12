import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../../assets/css/CarrierForm.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { postuler } from '../../actions/carriers';
// import FileBase from 'react-file-base64';
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
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(images/recrute01.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: '100%',
        backgroundPosition: 'center',
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
        margin: theme.spacing(4, 0, 0),
    },
    fileInput: {
        margin: '5px 0 2px 0'
    },
    loader: {
        color: '#ffffff',
    },
    loading: {
        margin: theme.spacing(2, 0, 1, 0),
        cursor: 'not-allowed',
    },
}));

export default function CarrierForm() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [file, setFile] = useState('');
    const history = useHistory();

    const initState = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().max(255).required('Nom & Prénom sont obligatoires'),
        email: Yup.string().email('Email doit être valide').max(255).required('Email est obligatoire'),
        phone: Yup.string().length(8, 'Le N° de Téléphone doit contenir exactement 8 chiffres').required('N° de Téléphone est obligatoire'),
        message: Yup.string().max(255).required('Addresse est obligatoire'),
    })

    // const [carrier, setCarrier] = useState(initState);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     await setLoader(true);
    //     await formData.append("file", file);
    //     await formData.append("carrier", JSON.stringify(carrier));
    //     await dispatch(postuler(formData, history));
    //     await setLoader(false);
    // };

    // const handleChange = (e) => {
    //     setCarrier({ ...carrier, [e.target.name]: e.target.value });
    // };

    console.log(file);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={5} md={5} className={classes.image} />
            <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <h3>Postuler pour un poste de travail</h3>
                    </Typography>
                    <Formik
                        initialValues={initState}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            // values.preventDefault();
                            const formData = new FormData();
                            await setLoader(true);
                            await formData.append("file", file);
                            await formData.append("carrier", JSON.stringify(values));
                            await dispatch(postuler(formData, history));
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
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nom & Prénom"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={handleChange}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                    onBlur={handleBlur}
                                />
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
                                {/* <div className={classes.fileInput}> */}
                                {/* <FileBase
                                        required
                                        type="file"
                                        multiple={false}
                                        name="cv"
                                        onDone={({ base64 }) => setCarrier({ ...carrier, cv: base64 })}
                                    /> */}
                                <CssTextField
                                    variant="outlined"
                                    fullWidth
                                    name="cv"
                                    type="file"
                                    onChange={(e) => {
                                        setFile(e.target.files[0]);
                                    }}
                                    error={Boolean(touched.cv && errors.cv)}
                                    helperText={touched.cv && errors.cv}
                                    onBlur={handleBlur}

                                />
                                {/* </div> */}
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    name="message"
                                    autoComplete="message"
                                    onChange={handleChange}
                                    error={Boolean(touched.message && errors.message)}
                                    helperText={touched.message && errors.message}
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
                                        Postuler
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