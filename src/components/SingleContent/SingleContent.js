import {  Card, CardActionArea, CardHeader, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './singleContentStyles';
import { img_300, unavailable} from '../../Config/config'
import { Link } from 'react-router-dom';


function SingleContent({
    id, title, poster, vote, date, type
}) {
    const classes = useStyles();

    return (
        <div>
                <Card className={classes.card}>
                        <div className={classes.theHeader}>
                            <CardHeader 
                                className={classes.cardHeader}
                                title={title}
                                titleTypographyProps={{variant:'h6'}}
                                
                            />
                            <div className={classes.subInfo}>
                            <Typography variant="caption" size="small" >{date}</Typography>
                            <Typography variant="caption" color={ vote > 6 ? "secondary": "primary" }>{vote}</Typography>
                            </div>
                        </div>
                        <Link to={`/${type}/${id}`}>
                            <CardActionArea >
                            <CardMedia 
                                    className={classes.media}
                                    image= {poster ? `${img_300}/${poster}` : unavailable}
                                    alt={title}
                                />
                            </CardActionArea>
                        </Link>
                            
                    </Card>
        </div>
    )
}

export default SingleContent
