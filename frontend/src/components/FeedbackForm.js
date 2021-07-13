import { Box, Button, makeStyles, TextField, withStyles } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#82171f',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#82171f',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'primary',
            },
            '&:hover fieldset': {
                borderColor: '#1c2237',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#82171f',
            },
        },
    },
})(TextField);

const CssButton = withStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundColor: '#1c2237',
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            backgroundColor: '#82171f',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(3, 0, 0, 0),
    },
}));

const labels = {
    0.5: 'Inutile',
    1: 'Inutile+',
    1.5: 'Mauvais',
    2: 'Mauvais+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Bon',
    4: 'Bon+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function FeedbackForm() {

    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);

    return (
        <div>
            <form validate>
                <span className='hover-rating'>
                    <div className={classes.root}>
                        <Rating
                            name="rating"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                        />
                        {value !== null && <Box ml={2} className={classes.rate}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </div>
                </span>
                <CssTextField
                    className={classes.margin}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nom & Prénom"
                    name="name"
                    autoComplete="name"
                />
                <CssTextField
                    className={classes.margin}
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="Ville"
                    name="city"
                    autoComplete="city"
                />
                <CssTextField
                    className={classes.margin}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    type='text'
                    id="message"
                    label="Message"
                    name="message"
                    autoComplete="message"
                    multiline
                    rows='3'
                />
                <CssButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.loading}
                >
                    Confirmer
                </CssButton>
            </form>
        </div>
    )
}

export default FeedbackForm
