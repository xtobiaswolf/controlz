import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

export const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 5,
    '& > span': {
      maxWidth: 100,
      width: '100%',
      height: 10,
      backgroundColor: '#A10081',
	    borderRadius: 5,
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      color: '#A10081'
    },
    '&$selected': {
      color: '#A10081',
    },
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);
