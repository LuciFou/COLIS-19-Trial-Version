import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import { Box, Fab, makeStyles, } from '@material-ui/core';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import NavigationIcon from '@material-ui/icons/Navigation';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AutoScrollToTop from './components/AutoScrollToTop';
import Home from './components/pages/Home';
import SocialSideBar from './components/SocialSideBar';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './components/pages/ContactPage'
import AbtUsPage from './components/pages/AbtUsPage';
import CarrierPage from './components/pages/CarrierPage';
import ForgetPassword from './components/pages/ForgetPassword';
import LoadingScreen from './components/LoadingScreen'
import NotFound from './components/pages/NotFound';


const useStyles = makeStyles((theme) => ({
  fab: {

    color: '#82171f',
    backgroundColor: '#1c2237',

    '&:hover': {
      color: '#82171f',
      backgroundColor: '#f0a672',
      transition: '0.5s'
    }
  }
}));

const DefaultContainer = () => {

  return (
    <>

      <Navbar />

      <ProgressBar />

      <SocialSideBar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/services' component={Services} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/about-us' component={AbtUsPage} />
        <Route path='/carrier' component={CarrierPage} />
        <Route path='/forgot-password' component={ForgetPassword} />
        <Redirect to="/404" />
      </Switch>

      <Footer />

    </>
  )
}

function App(props) {

  const classes = useStyles();

  const initState = {
    loading: true
  }

  const [isLoading, setLoading] = useState(initState);

  useEffect(() => {
    setTimeout(() =>
      setLoading(!isLoading)
      , 1500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (

    <LoadingScreen
      loading={isLoading}
      bgColor='#6d2227'
    // spinnerColor='#000'
    // textColor='#676767'
    // logoSrc='../public/images/logo/logo.png'
    // text='Veuillez patienter pendant le chargement de la page...'
    />

  ) : (
    <>
      <Router forceRefresh="true">

        <AutoScrollToTop />

        <Box id="back-to-top-anchor" />

        <Switch>

          <Route path="/404" exact render={() => <NotFound />} />
          <Route path="/" component={DefaultContainer} />

        </Switch>

        <ScrollToTop {...props}>
          <Fab className={classes.fab} size="small" aria-label="scroll back to top">
            <ArrowUpwardIcon />
            {/* <NavigationIcon /> */}
            {/* <KeyboardArrowUpIcon /> */}
          </Fab>
        </ScrollToTop>

      </Router>
      {/* </Scrollbar> */}
    </>
  );
}

export default App;
