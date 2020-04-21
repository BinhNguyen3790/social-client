import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {

}

class login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
