import { Divider, Grid, LinearProgress, makeStyles, withStyles } from '@material-ui/core';
import React from 'react';
// import StarRateIcon from '@material-ui/icons/StarRate';
import Rating from '@material-ui/lab/Rating';


const CssLinearProgress = withStyles({
    root: {
        '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: '#82171f',
        },
        '& .MuiLinearProgress-bar2Buffer': {
            backgroundColor: '',
        },
    },
})(LinearProgress);

const useStyles = makeStyles({
    divider: {
        height: '25px',
        backgroundColor: '#fff',
    },
    // progress: {
    //     width: '400px',
    // },
    feedbackAvg: {
        fontSize: '100px',
        fontFamily: '"Trebuchet MS", sans-serif',
        marginLeft: '-150px',
        color: '#1c2237',
    },
    wrap: {
        display: 'flex',
        fontWeight: 100,
    },
    star: {
        color: '#FF9529',
        fontSize: '150px',
        marginLeft: '-40px'
    },
    noWrap: {
        whiteSpace: 'pre',
        textAlign: 'left',
        marginLeft: '-120px',
        fontFamily: '"Trebuchet MS", sans-serif',
        color: '#1c2237',
    },
    inLine: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        lineHeight: '15px',
        padding: 0,
        margin: 0,
    },
    avg: {
        fontSize: '35px',
        marginTop: '68px',
        fontFamily: '"Trebuchet MS", sans-serif',
        color: '#1c2237',
    }
});

function FeedbacksAvg() {

    const classes = useStyles();

    let feedbacksCount = 500;
    let oneStar = 50;
    let twoStar = 70;
    let threeStar = 80;
    let fourStar = 180;
    let fiveStar = 120;
    let feedbAvg = 3.5;

    return (
        <div>
            <Grid container xs={12} className={classes.wrap} spacing={5}>
                <Grid item container xs={12} sm={5} md={5}>
                    <Grid item container xs={12}>
                        <Grid item xs={4}>
                            <h1 className={classes.feedbackAvg}>
                                {feedbAvg}
                            </h1>
                        </Grid>
                        <Grid item xs={8}>
                            {/* <StarRateIcon className={classes.star} /> */}
                            <h1 className={classes.avg}>sur 5</h1>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 className={classes.noWrap}>{feedbacksCount} notes</h1>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={7} md={7}>
                    <Grid item container xs={12} className={classes.inLine}>
                        <Grid item xs={8}>
                            <Rating name="read-only" value={5} readOnly />
                        </Grid>
                        <Grid item xs={4}>
                            <CssLinearProgress variant="buffer" value={fiveStar} className={classes.progress} />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item container xs={12} className={classes.inLine}>
                        <Grid item xs={8}>
                            <Rating name="read-only" value={4} readOnly />
                        </Grid>
                        <Grid item xs={4}>
                            <CssLinearProgress variant="buffer" value={fourStar} className={classes.progress} />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item container xs={12} className={classes.inLine}>
                        <Grid item xs={8}>
                            <Rating name="read-only" value={3} readOnly />
                        </Grid>
                        <Grid item xs={4}>
                            <CssLinearProgress variant="buffer" value={threeStar} className={classes.progress} />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item container xs={12} className={classes.inLine}>
                        <Grid item xs={8}>
                            <Rating name="read-only" value={2} readOnly />
                        </Grid>
                        <Grid item xs={4}>
                            <CssLinearProgress variant="buffer" value={twoStar} className={classes.progress} />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item container xs={12} className={classes.inLine}>
                        <Grid item xs={8}>
                            <Rating name="read-only" value={1} readOnly />
                        </Grid>
                        <Grid item xs={4}>
                            <CssLinearProgress variant="buffer" value={oneStar} className={classes.progress} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FeedbacksAvg
