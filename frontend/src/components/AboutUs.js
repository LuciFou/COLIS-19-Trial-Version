import React from 'react'
import '../assets/css/AboutUs.css'

function AboutUs() {
    return (
        <>
            <div className='aboutus__hero-section'>
                <div className='aboutus-container'>
                    <div className='row aboutus__hero-row'>
                        <div className='about-us-col'>
                            <div className='aboutus__hero-text-wrapper'>
                                {/* <div className='top-line'></div> */}
                                <h1 className='about-us-heading'>
                                    A propos de COLIS-19
                                </h1>
                                <p className='aboutus__hero-subtitle'>
                                    COLIS-19 est une nouvelle société 100% tunisienne crée en 2021, spécilisée à la livraison des colis sur tout le territoire tunisien et se compose d'une équipe d'une dizaine de jeunes gens disciplinés et motivés,
                                    qui vont vous garantir des meilleurs services avec une grande flexibilité et en toute sécurité. En effet , nous visons à simplifier votre vie avec les services que nous offrons et les points fidélités que vous pouvez gagnez à chaque colis envoyé via notre site et ainsi devenir votre premier livreur confiant en Tunisie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
