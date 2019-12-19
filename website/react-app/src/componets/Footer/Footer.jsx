import React from 'react';

import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: theme.palette.primary,
    },
    grow: {
      flexGrow: 1,
    },
  }));

function BottomAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar><Typography variant="body2" >Designed and built by members of WUXC</Typography></Toolbar>
        </AppBar>

        // <div className="footer">
        //     <div>
        //         <p>Designed and built by members of WUXC</p>
        //     </div>
        // </div>
        // <div></div>
    );
}

export default BottomAppBar;
