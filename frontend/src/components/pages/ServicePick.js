import React from 'react';
import '../../assets/css/ServicePick.css';
import { BiMailSend } from 'react-icons/bi';
import { CgTrack } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import { Container } from '@material-ui/core';

function ServicePick() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='service__section'>
                <Container className='service__wrapper'>
                    <h1 className='service__heading'>Choisir le service souhaité</h1>
                    <div className='service__container'>
                        <Link to='/services/send' className='service__container-card'>
                            <div className='service__container-cardInfo'>
                                <div className='icon'>
                                    <BiMailSend />
                                </div>
                                <h3 className='service__title'>Envoi normal</h3>
                                <h6 className='service__container-features'>
                                    Vous êtes nouveau sur notre site Web?
                                    Essayez d'envoyer un paquet et profitez de nos offres.
                                    Prenez plaisir d'avoir votre colis dans vos mains dans 24h/48h.
                                </h6>
                                <Button buttonSize='btn--service' buttonColor='blue'>
                                    Vas-y
                                </Button>
                            </div>
                        </Link>
                        <Link to='/services/plan-send' className='service__container-card'>
                            <div className='service__container-cardInfo'>
                                <div className='icon'>
                                    <FaCalendarAlt />
                                </div>
                                <h3 className='service__title'>Planifier un envoi</h3>
                                <h6 className='service__container-features'>
                                    Vous avez quelque chose de spécial à célébrer?
                                    Vous avez quelqu'un de spécial à offrir?
                                    Avec COLIS-19, vous pouvez organiser un plan d'envoi et le colis ira où et surtout quand vous le souhaitez.
                                </h6>
                                <Button buttonSize='btn--service' buttonColor='blue'>
                                    Surprenez vos proches
                                </Button>
                            </div>
                        </Link>
                        <Link to='/services/track' className='service__container-card'>
                            <div className='service__container-cardInfo'>
                                <div className='icon'>
                                    <CgTrack />
                                </div>
                                <h3 className='service__track__title'>Suivre votre livraison</h3>
                                <h6 className='service__track__container-features'>
                                    Vous avez déjà envoyé un colis ou peut-être que vous en attendez un?
                                    Ne vous inquiètez pas.
                                    Nous allons le suivre pour vous.
                                </h6>
                                <Button buttonSize='btn--service' buttonColor='red'>
                                    Suivre votre livraison
                                </Button>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
        </IconContext.Provider>
    );
}
export default ServicePick;
