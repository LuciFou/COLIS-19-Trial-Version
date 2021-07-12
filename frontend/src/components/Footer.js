import React from 'react';
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>a propos de nous</h2>
            <hr className="solid" />
            <p>COLIS-19 est une nouvelle société 100% tunisienne crée en 2021, spécilisée à la livraison des colis sur tout le territoire tunisien et se compose d'une équipe d'une dizaine de jeunes gens disciplinés et motivés, qui vont vous garantir des meilleurs services avec une grande flexibilité et en toute sécurité. En effet , nous visons à simplifier votre vie avec les services que nous offrons et les points fidélités que vous pouvez gagnez à chaque colis envoyé via notre site et ainsi devenir votre premier livreur confiant en Tunisie.</p>
          </div>
          <div className='footer-link-items'>
            <h2>information</h2>
            <hr className="solid" />
            <Link to='/contact'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Contact</span1></Link>
            <Link to='/services/track'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Suivre votre Livraison</span1></Link>
            <Link to='/carrier'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Carrières</span1></Link>
            <Link to='/about-us'><span1><i className="fas fa-chevron-right"></i>&nbsp;&nbsp;A propos de Colis-19</span1></Link>
          </div>
          <div className='footer-link-items'>
            <h2>contact info</h2>
            <hr className="solid" />
            <div className="material-icons">
              <i className="fas fa-map-marker-alt"></i>
              <span> 20 Rue de la Liberté</span>
            </div>
            <div className="material-icons">
              <i className="fas fa-phone-alt"></i>
              <span> Service Client</span>
              <br />
              <p><a href="tel:+21655742938">(+216) 55742938</a> | <a href="tel:+21626699906">(+216) 26699906</a></p>
            </div>
            <div className="material-icons">
              <i className="fas fa-phone-alt"></i>
              <span> Service Commercial</span>
              <br />
              <p><a href="tel:+21655742938">(+216) 55742938</a> | <a href="tel:+21626699906">(+216) 26699906</a></p>
            </div>
            <div className="material-icons">
              <i className="fas fa-envelope"></i>
              <a href="mailto:colis-19@hotmail.com"> colis-19@hotmail.com</a>
            </div>
            <div className="material-icons">
              <i className="far fa-clock"></i>
              <span> Lun- Sam: 9:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="../../images/logo/lgmin.png" alt='logo-colis-19' /> COLIS-19
            </Link>
          </div>
          <small className='website-rights'>© Copyrights 2021 COLIS-19, by <a href="/" target="_blank" rel="noreferrer">Fourat Abdellatif</a>
          </small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/Colis-19-102479658740692'
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.facebook.com/Colis-19-102479658740692'
              target='_blank'
              aria-label='Instagram'
              rel="noreferrer"
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://www.facebook.com/Colis-19-102479658740692'
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;