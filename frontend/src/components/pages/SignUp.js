import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'react-autocomplete-input/dist/bundle.css';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CircularProgress, makeStyles, MenuItem, withStyles } from '@material-ui/core';

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
        height: '60px',
        alignItems: 'center'
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
  paperContainer: {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${"images/bg10.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%",
    borderTop: '50px solid transparent',
    borderBottom: '50px solid transparent'
  },
  paper: {
    marginTop: theme.spacing(0),
    marginRight: -150,
    marginLeft: -150,
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#82171f'
  },
  dropdown: {
    width: '100%',
    height: '55px',
    paddingLeft: '10px',
    fontSize: '18px',
    fontWeight: 'lighter',
    color: '#929396'
  },
  alert: {
    marginTop: '20px',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    // border: 'solid 2px black',
    // borderRadius: '10px',
  },
  loader: {
    color: '#ffffff',
  },
  loading: {
    margin: theme.spacing(2, 0, 1, 0),
    cursor: 'not-allowed',
  },
}));

export default function SignUp() {

  const classes = useStyles();
  const [loader, setLoader] = useState(false);

  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    codepostal: "",
    city: "",
    numCIN: "",
    password: "",
    confirmPassword: ""
  }

  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().max(255).required('Prénom est obligatoire'),
    lastName: Yup.string().max(255).required('Nom est obligatoire'),
    email: Yup.string().email('Email doit être valide').max(255).required('Email est obligatoire'),
    phone: Yup.string().length(8, 'Le N° de Téléphone doit contenir exactement 8 chiffres').required('N° de Téléphone est obligatoire'),
    address: Yup.string().max(255).required('Addresse est obligatoire'),
    codepostal: Yup.string().length(4, 'Le code postal doit contenir exactement 4 chiffres').required('Code Postal est obligatoire'),
    city: Yup.string().max(255).required('Ville est obligatoire'),
    numCIN: Yup.string().length(8, 'Le N° CIN doit contenir exactement 8 chiffres').required('N° CIN est obligatoire'),
    password: Yup.string()
      .matches(lowercaseRegex, 'Votre mot de passe doit contenir au moins une lettre miniscule')
      .matches(uppercaseRegex, 'Votre mot de passe doit contenir au moins une lettre majuscule')
      .matches(numericRegex, 'Votre mot de passe doit contenir au moins un chiffre')
      .min(8, 'Votre mot de passe doit contenir au moins 8 caractères')
      .required('Mot de Passe est obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Les mots de passe doivent correspondre')
      .required('Vous devez confirmer le mot de passe'),
  })


  const cities = [
    // { municipale: "", label: "Ville" },
    { municipale: "Ariana", label: "Ariana" },
    { municipale: "Ben Arous", label: "Ben Arous" },
    { municipale: "Ben Gardane", label: "Ben Gardane" },
    { municipale: "Bizerte", label: "Bizerte" },
    { municipale: "Béja", label: "Béja" },
    { municipale: "Djerba - Houmt Souk", label: "Djerba - Houmt Souk" },
    { municipale: "Djerba - Midoun", label: "Djerba - Midoun" },
    { municipale: "Douar Hicher", label: "Douar Hicher" },
    { municipale: "El Aïn", label: "El Aîn" },
    { municipale: "El Mourouj", label: "El Mourouj" },
    { municipale: "Ettadhamen", label: "Ettadhamen" },
    { municipale: "Fouchana", label: "Fouchana" },
    { municipale: "Gabès", label: "Gabès" },
    { municipale: "Gafsa", label: "Gafsa" },
    { municipale: "Hammam Sousse", label: "Hammam Sousse" },
    { municipale: "Hammamet", label: "Hammamet" },
    { municipale: "Jemmal", label: "Jemmal" },
    { municipale: "Jendouba", label: "Jendouba" },
    { municipale: "Kairouan", label: "Kairouan" },
    { municipale: "Kalâa Kebira", label: "Kalâa Kebira" },
    { municipale: "Kasserine", label: "Kasserine" },
    { municipale: "Ksar Hellal", label: "Ksar Hellal" },
    { municipale: "Kélibia", label: "Kélibia" },
    { municipale: "La Goulette", label: "La Goulette" },
    { municipale: "La Marsa", label: "La Marsa" },
    { municipale: "La Soukra", label: "La Soukra" },
    { municipale: "Le Bardo", label: "Le Bardo" },
    { municipale: "Le Kef", label: "Le Kef" },
    { municipale: "Le Kram", label: "Le Kram" },
    { municipale: "M'saken", label: "M'saken" },
    { municipale: "Mahdia", label: "Mahdia" },
    { municipale: "Menzel Bourguiba", label: "Menzel Bourguiba" },
    { municipale: "Mnihla", label: "Mnihla" },
    { municipale: "Mohamedia", label: "Mohamedia" },
    { municipale: "Moknine", label: "Moknine" },
    { municipale: "Monastir", label: "Monastir" },
    { municipale: "Médenine", label: "Médenine" },
    { municipale: "Nabeul", label: "Nabeul" },
    { municipale: "Oued Ellil", label: "Oued Ellil" },
    { municipale: "Radés", label: "Radés" },
    { municipale: "Raoued", label: "Raoued" },
    { municipale: "Sakiet Eddaïer", label: "Sakiet Eddaier" },
    { municipale: "Sakiet Ezzit", label: "Sakiet Ezzit" },
    { municipale: "Sfax", label: "Sfax" },
    { municipale: "Sidi Bouzid", label: "Sidi Bouzid" },
    { municipale: "Sidi Hassine", label: "Sidi Hassine" },
    { municipale: "Sousse", label: "Sousse" },
    { municipale: "Tataouine", label: "Tataouine" },
    { municipale: "Tunis", label: "Tunis" },
    { municipale: "Zarzis", label: "Zarzis" },
  ]

  return (
    <>
      <Helmet>
        <title>Créer un Compte | COLIS-19</title>
      </Helmet>
      <div className={classes.paperContainer}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}  >
            <Avatar className={classes.avatar}>
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{
              color: '#1c2237'
            }}>
              Créer un nouveau compte
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
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CssTextField
                        className={classes.margin}
                        autoComplete="family-name"
                        name="lastName"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Nom"
                        onChange={handleChange}
                        autoFocus
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CssTextField
                        className={classes.margin}
                        autoComplete="given-name"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Prénom"
                        onChange={handleChange}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="Adresse e-mail"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        required
                        fullWidth
                        id="phone"
                        type="tel"
                        label="N° de Téléphone"
                        name="phone"
                        autoComplete="tel"
                        onChange={handleChange}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        type="text"
                        label="Adresse"
                        name="address"
                        autoComplete="adress"
                        onChange={handleChange}
                        error={Boolean(touched.address && errors.address)}
                        helperText={touched.address && errors.address}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        required
                        fullWidth
                        id="codepostal"
                        type="text"
                        label="Code postal"
                        name="codepostal"
                        autoComplete="postal-code"
                        onChange={handleChange}
                        error={Boolean(touched.codepostal && errors.codepostal)}
                        helperText={touched.codepostal && errors.codepostal}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <CssTextField
                        variant="outlined"
                        label="Ville"
                        autoComplete="city"
                        fullWidth
                        required
                        name="city"
                        className={classes.formControl}
                        onChange={handleChange}
                        error={Boolean(touched.city && errors.city)}
                        helperText={touched.city && errors.city}
                        margin="normal"
                        onBlur={handleBlur}
                        select
                      >
                        {cities.map((city) => (
                          <MenuItem value={city.municipale}>{city.label}</MenuItem>
                        ))}
                      </CssTextField>
                    </Grid>
                    <Grid item xs={5}>
                      <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        required
                        fullWidth
                        id="numCIN"
                        type="text"
                        name="numCIN"
                        label="N° CIN"
                        onChange={handleChange}
                        error={Boolean(touched.numCIN && errors.numCIN)}
                        helperText={touched.numCIN && errors.numCIN}
                        margin="normal"
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de Passe"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        type="password"
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirmer mot de passe"
                        id="confirmPassword"
                        autoComplete="confirm-password"
                        onChange={handleChange}
                        type="password"
                        error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        onBlur={handleBlur}
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
                      className={classes.margin}
                    >
                      Créer un compte
                    </CssButton>)}
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/sign-in" variant="body2" style={{ color: '#82171f' }}>
                        Vous avez déjà un compte? S'identifier
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
    </>
  );
}
