import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import AppLogo from './AppLogo';
import MenuLink from './menulink';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: theme.spacing(3),
  },
  navLink: {
    color: 'white', // Ensure text color is set to white
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <AppLogo />
          <Typography variant="h6" className={classes.title}>
            VivaStackTech
          </Typography>
          <Box className={classes.navLinksContainer}>
            <MenuLink url="/home" pageName="Home" className={classes.navLink} />
            <MenuLink
              url="/about_us"
              pageName="About Us"
              className={classes.navLink}
            />
            <MenuLink
              url="/services"
              pageName="Services"
              className={classes.navLink}
            />
            <MenuLink
              url="/projects"
              pageName="Projects"
              className={classes.navLink}
            />
            <MenuLink
              url="/contacts"
              pageName="Contacts"
              className={classes.navLink}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
