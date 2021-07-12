import React from 'react'
import { makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import '../assets/css/ScrollToTop.css'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 999999,
    },
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

function ScrollToTop(props) {

    const { children, window } = props;
    const classes = useStyles();
    
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

  export default ScrollToTop