import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Chat from '../../../chat/ChatApp';
import clsx from 'clsx';
import NetworksToolbar from '../common/NetworksToolbar';

const useStyles = makeStyles(theme => ({
  paper: {
  	borderRadius: 10,
  },
}));

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

function Messages () {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<div className="w-full">
			<div className="flex flex-1 flex-col min-w-0 container sm:p-8">
				<div className="flex justify-between p-40">
					<Typography className="text-36 font-600">
						Messages
					</Typography>
	      </div>

	      <Paper className="m-16 mx-40">
	      	<Typography className="p-16">
		      	Select the network you want to see comments and messages from
	      	</Typography>

					<NetworksToolbar />
	      </Paper>

	      <Chat />
			</div>
		</div>
	)
}

export default Messages;