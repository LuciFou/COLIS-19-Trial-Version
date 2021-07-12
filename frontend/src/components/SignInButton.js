import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';

function SignInButton() {

    const [setClick] = useState(false);
    const [button] = useState(true);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            {button ? (
                <Link to='/sign-in' className='btn-link'>
                    <Button buttonStyle='btn--primary'
                    >
                        Se Connecter
                    </Button>
                </Link>
            ) : (
                <Link to='/sign-in' className='btn-link'>
                    <Button
                        buttonStyle='btn--primary'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                    >
                        Se Connecter
                    </Button>
                </Link>
            )}
        </div>
    )
}

export default SignInButton
