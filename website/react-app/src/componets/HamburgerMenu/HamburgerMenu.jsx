import React from 'react';
import {IconButton, ListItemText, ListItemIcon, ListItem, List, Drawer, makeStyles} from '@material-ui/core';
import {Menu, Home, CalendarToday, Info} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import './HamburgerMenu.css';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
});

export default function HamburgerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideButtonList = [<Home/>, <CalendarToday/>, <Info/>]

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
        <List>
            {['Home', 'Calendar', 'About'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{sideButtonList[index]}</ListItemIcon>
                <Link to={'/'+text}>
                    <ListItemText primary={text} />
                </Link>
            </ListItem>
            ))}
        </List>
        {/* <li><Link to='/'>Home</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List> */}
    </div>
  );

//   const fullList = side => (
//     <div
//       className={classes.fullList}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

  return (
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}> */}
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
            edge='start'
            className={`calc(100%) > 600px` ? classes.hide : ''}
            
          >
            <Menu/>
        </IconButton>      
        {/* <div className="hamburgerMenu" id="hamburger" onClick={toggleDrawer('left', true)}>

        <div className="hamburgerButton">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        </div> */}
      {/* </Button> */}
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

// import React from 'react';
// import Button from '@material-ui/core/Button';

// import './HamburgerMenu.css';


// const hamburgerMenu = props => {
//     let hamburgerMenuClasses = "hamburgerMenu";

//     if(props.showSideDrawer){
//         hamburgerMenuClasses = "hamburgerMenu close";
//     }
//     const toggleDrawer = (side, open) => event => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
    
//         setState({ ...state, [side]: open });
//       };

//     return(
//         <Button onClick={toggleDrawer('left', true)}>   
//             <div className={hamburgerMenuClasses} id="hamburger">
//                 <div className="hamburgerButton">
//                     <span className="line line1"></span>
//                     <span className="line line2"></span>
//                     <span className="line line3"></span>
//                 </div>
//             </div>
//         </Button>

//         // <div className={hamburgerMenuClasses} id="hamburger" onClick={props.click}>
//         //     <div className="hamburgerButton">
//         //         <span className="line line1"></span>
//         //         <span className="line line2"></span>
//         //         <span className="line line3"></span>
//         //     </div>
//         // </div>
//     );
// }
// export default hamburgerMenu;
