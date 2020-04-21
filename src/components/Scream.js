import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CartMedia from '@material-ui/core/CardMedia';
import Typorgraphy from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
}

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const { classes, scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props
    return (
      <Card className={classes.card}>
        <CartMedia className={classes.image} image={userImage} title='Profile image' />
        <CardContent className={classes.content}>
          <Typorgraphy variant='h5' component={Link} to={`/users/${userHandle}`} color="primary">{userHandle}</Typorgraphy>
          <Typorgraphy variant='body2' color='textSecondary'>{dayjs(createdAt).fromNow()}</Typorgraphy>  
          <Typorgraphy variant='body1'>{body}</Typorgraphy>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream)
