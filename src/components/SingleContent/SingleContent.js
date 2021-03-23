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
                    <Typography variant="caption" size="small" style={{marginLeft:'5px'}}>{date}</Typography>
                    <CardActionArea>
                    <CardMedia 
                        className={classes.media}
                        image= {poster ? `${img_300}/${poster}` : unavailable}
                        alt={title}
                    />
                    </CardActionArea>
                    <div className={classes.cardBottom}>
                        <Typography variant="overline" color={ vote > 6 ? "secondary": "primary" }>
                            {vote}
                        </Typography>
                    </div>
                </Card>
                
        </div>
    )
}

export default SingleContent
