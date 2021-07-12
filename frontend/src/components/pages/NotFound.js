import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <>
        <Helmet>
            <title>404 Page Introuvable | COLIS-19</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center'
            }}
        >
            <Container maxWidth="md">
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h1"
                    gutterBottom
                >
                    404: Page Introuvable
                </Typography>
                {/* <Typography
                    align="center"
                    color="textPrimary"
                    variant="subtitle2"
                >
                    You either tried some shady route or you came here by mistake.
                    Whichever it is, try using the navigation
                </Typography> */}
                {/* <Box sx={{ textAlign: 'center' }}>
                    <img
                        alt="Under development"
                        src="/static/images/undraw_page_not_found_su7k.svg"
                        style={{
                            marginTop: 50,
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 560
                        }}
                    />
                </Box> */}
                <Link to='/'>
                    Retour à la page d'Accueil
                </Link>
            </Container>
        </Box>
    </>
);

export default NotFound;