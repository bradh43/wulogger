import React from 'react';

import './Footer.css';
import {makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    appBar: {
      top: 'auto',
      bottom: '0',
      minHeight: 32,
      maxHeight: 32,
      backgroundColor: theme.palette.primary,
    },
    grow: {
      flexGrow: 1,
    },
  }));

function BottomAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" variant="dense" className={classes.appBar}>
            <Toolbar className={classes.appBar}><Typography variant="body2" >Designed and built by members of WUXC</Typography></Toolbar>
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
// export default withStyles(styles)(BottomAppBar);

