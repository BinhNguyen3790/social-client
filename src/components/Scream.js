import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CartMedia from '@material-ui/core/CardMedia';
import Typorgraphy from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex'
  }
}

class Scream extends Component {
  render() {
    const { classes, scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props
    return (
      <Card>
        <CartMedia image={userImage} title='Profile image'/>
        <CardContent>
          <Typorgraphy variant='h5' component={Link} to={`/users/${userHandle}`}>{userHandle}</Typorgraphy>
          <Typorgraphy variant='body2' color='textSecondary'>{createdAt}</Typorgraphy>
          <Typorgraphy variant='body1'>{body}</Typorgraphy>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Scream)
