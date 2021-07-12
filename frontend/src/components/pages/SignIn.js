import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { CircularProgress, TextField } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import * as Yup from 'yup';

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
    // margin: theme.spacing(1),
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
  passwordField: {
    margin: theme.spacing(4, 0, 0, 0),
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

export default function SignIn() {
  const classes = useStyles();

  const [loader, setLoader] = useState(false);

  const initState = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Cet email n'est pas valide").max(255).required('Email est obligatoire'),
    password: Yup.string().max(255).required('Mot de Passe est obligatoire'),
  })

  return (
    <>
      <Helmet>
        <title>Se Connecter | COLIS-19</title>
      </Helmet>
      <div className={classes.paperContainer}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se Connecter
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
                setSubmitting,
                touched,
              }) => (
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                  <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    margin="normal"
                    onBlur={handleBlur}
                  />
                  <CssTextField
                    className={classes.passwordField}
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
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    // type={showPassword ? 'text' : 'password'}
                    // handleShowPassword={handleShowPassword}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    onBlur={handleBlur}
                  />

                  {/* <FormControlLabel
                    control={<CssCheckbox value="remember" color="primary" />}
                    label="Se souvenir de moi"
                  /> */}

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
                      connexion
                    </CssButton>
                  )}

                  <Grid container>
                    <Grid item xs>
                      <Link to='/forgot-password' variant="body2" style={{ color: '#82171f' }}>
                        Mot de passe oublié?
                      </Link>
                    </Grid>
                    <Grid item >
                      <Link to="/sign-up" variant="body2" style={{ color: '#82171f' }}>
                        {"Vous n'avez pas de compte?"}
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