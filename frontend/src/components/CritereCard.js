import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: '320px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    header: {
        fontSize: '20px',
        color: '#1c2237',
    },
    paragraph: {
        fontSize: '16px',
        color: '#1c2237',
        textAlign: 'justify',
    },
});

export default function CritereCard(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={
                    <div className={classes.header}>
                        {props.title}
                    </div>
                }
            />
            <CardMedia
                className={classes.media}
                image={props.img}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
                    {props.paragraph}
                </Typography>
            </CardContent>
        </Card>
    );
}