import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&.active': {
      fontWeight: 'bold',
    },
  },
}));

const MenuLink = ({ url, pageName }) => {
  const classes = useStyles();

  return (
    <Link href={url} className={classes.navLink}>
      {pageName}
    </Link>
  );
};

MenuLink.propTypes = {
  pageName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;
