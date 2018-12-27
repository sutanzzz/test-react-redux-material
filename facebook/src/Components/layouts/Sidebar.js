import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      },
      toolbar: theme.mixins.toolbar,
    });

function ClippedDrawer(props) {
    const { classes } = props;
  
    return (
 <Drawer
 className={classes.drawer}
 variant="permanent"
 classes={{
   paper: classes.drawerPaper,
 }}
>
 <div className={classes.toolbar} />
 <List>
   {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
     <ListItem button key={text}>
       <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
       <ListItemText primary={text} />
     </ListItem>
   ))}
 </List>
 <Divider />
 <List>
   {['All mail', 'Trash', 'Spam'].map((text, index) => (
     <ListItem button key={text}>
       <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
       <ListItemText primary={text} />
     </ListItem>
   ))}
 </List>
</Drawer>
    );
   }
ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ClippedDrawer);