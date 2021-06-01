import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Icons from 'app/icons/Icons';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
	    backgroundColor: 'transparent',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000',
    backgroundColor: '#c3c3c3',
    fontWeight: 'bold',
    padding: 10,
    minWidth: 100,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
    '&$selected': {
    },
  },
  selected: {},
  wrapper: {
    flexDirection: "row",
    alignItems: 'end',
    // justifyContent: "space-evenly"
  },
  labelIcon: {
    minHeight: 30,
  },
}))((props) => <Tab {...props} />);

function NetworksToolbar () {
	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<StyledTabs value={value} onChange={handleChange} variant="fullWidth" aria-label="styled tabs example">
      <StyledTab label="Facebook" icon={<Icons value="f"/>} />
      <StyledTab label="Instagram" icon={<Icons value="instagram"/>} />
      <StyledTab label="Youtube" icon={<Icons value="youtube"/>} />
      <StyledTab label="Twitter" icon={<Icons value="twitter"/>} disabled />
      <StyledTab label="Tiktok" icon={<Icons value="tiktok"/>} disabled />
      <StyledTab label="Google" icon={<Icons value="google_business"/>} disabled />
      <StyledTab label="Pinterest" icon={<Icons value="pinterest"/>} disabled />
      <StyledTab label="Linkedin" icon={<Icons value="linkedin"/>} disabled />
    </StyledTabs>
	)
}

export default NetworksToolbar;