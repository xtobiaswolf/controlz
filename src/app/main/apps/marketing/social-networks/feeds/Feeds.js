import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import NetworksToolbar from '../common/NetworksToolbar';

const useStyles = makeStyles(theme => ({
  paper: {
  	borderRadius: 10,
  },
}));

function Feeds () {
	const classes = useStyles();

	return (
		<div className="w-full">
			<div className="flex flex-1 flex-col min-w-0 container sm:p-8">
				<div className="flex justify-between p-40">
					<Typography className="text-36 font-600">
						Feeds
					</Typography>
	      </div>

	      <Paper className="m-16 mx-40">
	      	<Typography className="p-16">
		      	Select the network you want to see the feed
	      	</Typography>

					<NetworksToolbar />
	      </Paper>
	      <div className="p-100">
	      <Typography className="text-center text-28 font-bold p-100">
	      	Here you will see the feeds from your social networks.
					Follow the publications in real time in a centralized way!

					Add it now and experience this benefit!
				</Typography>
				</div>
			</div>
		</div>
	)
}

export default Feeds;