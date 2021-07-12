import React from 'react';
import CarrierForm from '../CarrierForm';
import { Helmet } from 'react-helmet';

function CarrierPage() {
    return (
        <>
            <Helmet>
                <title>Carrières | COLIS-19</title>
            </Helmet>
            <CarrierForm />
        </>
    )
}

export default CarrierPage
