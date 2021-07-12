/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { fade, makeStyles, InputBase } from '@material-ui/core';
import SignInButton from './SignInButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  '& .MuiMenu-list': {
    color: 'red',
    backgroundColor: 'red'
  },
  root: {
    flexGrow: 1,
  },
  search: {
    color: '#fff',
    margin: '15px 50px 0px 50px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
      transition: '0.4s'
    },
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    width: '30%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginTop: '8px',
    marginBottom: '-10px',
    padding: theme.spacing(1, 3, 3, 3),
    //margin: theme.spacing(3, 3, 3, 3),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(2em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100px',
      '&:focus': {
        width: '150px',
      },
    },
  },
}));


function Navbar() {

  const classes = useStyles();

  const [click, setClick] = useState(false);
  // const [button] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              {/* <i class="fas fa-box-open" />&nbsp;COLIS-19 */}
              <img src="../../images/logo/lgmin.png" alt='logo-colis-19' /> COLIS-19
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-search'>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Rechercher…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </li>
              <li className='nav-item'>
                <NavLink
                  exact
                  to='/'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Accueil
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/services'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about-us'
                  activeClassName='nav-links--active'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  A Propos
                </NavLink>
              </li>
              <div>
                <li className='nav-dropdown'>
                  {/* <DropdownButton /> */}
                  <SignInButton />
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
