import {  Card, CardActionArea, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './singleContentStyles';
import { img_300, unavailable} from '../../Config/config'


function SingleContent({
    id, title, poster, vote, date, type, vote_total
}) {
    const classes = useStyles();

    return (
        <div>
                <Card className={classes.card}>
                    <CardHeader 
                        className={classes.cardHeader}
                        title={title}
                    />
                    <div className={classes.subInfo}>
                    <Typography variant="caption" size="small" >{date}</Typography>
                    <Typography variant="caption" color={ vote > 6 ? "secondary": "primary" }>{vote}</Typography>
                    </div>
                    
                    <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image= {poster ? `${img_300}/${poster}` : unavailable}
                        alt={title}
                    />
                    </CardActionArea>
                    
                </Card>
                
        </div>
    )
}

export default SingleContent
