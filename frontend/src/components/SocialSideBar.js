/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useModal from './hooks/useModal';
import RatingModal from './RatingModal';
import '../assets/css/SocialSideBar.css';

function SocialSideBar() {

    const { isShowing, toggle } = useModal();

    return (
        <div className='sidebar-menu'>
            <a href='https://www.facebook.com/Colis-19-102479658740692' target='_blank' className="facebookk" rel="noreferrer"><i className="fab fa-facebook-f fb"></i> Facebook</a>
            <a href="#" className="twitterr"><i className="fab fa-twitter twt"></i> Twitter</a>
            <a href='https://www.facebook.com/Colis-19-102479658740692' target='_blank' className="instagramm" rel="noreferrer"><i className="fab fa-instagram ig"></i> Instagram</a>
            <a href='https://www.facebook.com/Colis-19-102479658740692' target='_blank' className="linkedinn" rel="noreferrer"><i className="fab fa-linkedin-in lkin"></i> Linkedin</a>
            <a href="#" className="githubb"><i className="fab fa-github ghub"></i> Github</a>
            <a href="#" className="youtubee"><i className="fab fa-youtube yt"></i> Youtube</a>
            <a className="rating" onClick={toggle}><i class="fas fa-star-half-alt"></i> Feedback</a>
            <RatingModal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    )
}

export default SocialSideBar
