import React from 'react';
import { Typography, makeStyles, withStyles } from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';
import StarsIcon from '@material-ui/icons/Stars';

const StyledRating = withStyles({
    iconFilled: {
        color: '#82171f',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    feedback: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: '0 50px',
    },
    fb: {
        fontSize: '35px',
    },
    message: {
        marginTop: '50px',
        marginBottom: '50px',
        textAlign: 'left',
        fontSize: '25px',
    },
    name: {
        textAlign: 'left',
        color: '#1c2237',
        fontWeight: '700',
        fontSize: '26px',
    },
    city: {
        textAlign: 'left',
        fontStyle: 'italic',
        fontSize: '23px',
    },
}));

const Testimonial = ({ feedback }) => {

    const classes = useStyles();

    return (
        <div className={classes.feedback}>
            <StyledRating
                name="read-only"
                value={feedback.rating}
                precision={0.5}
                icon={<StarsIcon fontSize="inherit" />}
                readOnly
                className={classes.fb}
            />
            <Typography variant="h6" className={classes.message}>
                “{feedback.message}”
            </Typography>
            <Typography variant="h5" className={classes.name}>
                {feedback.name}
            </Typography>
            <Typography variant="h6" className={classes.city}>
                {feedback.city}
            </Typography>
        </div>
    );
};

export default Testimonial;