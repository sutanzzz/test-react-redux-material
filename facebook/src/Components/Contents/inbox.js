import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import messages from './Reducers/reducer-user';
import Header from './Components/layouts/Header';

const styles = theme => ({
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  });

  function Inbox(props) {
    const { classes } = props;
    return (
      <React.Fragment>
        <Header />
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            Inbox
          </Typography>
          <List className={classes.list}>
            {messages.map(({ id, primary, secondary, person }) => (
              <Fragment key={id}>
                {id === 1 && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
                {id === 3 && <ListSubheader className={classes.subHeader}>Yesterday</ListSubheader>}
                <ListItem button>
                  <Avatar alt="Profile Picture" src={person} />
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Paper>
      </React.Fragment>
    );
  }

  Inbox.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Inbox);
