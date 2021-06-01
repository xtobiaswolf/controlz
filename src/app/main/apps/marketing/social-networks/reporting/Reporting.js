import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import NetworksToolbar from '../common/NetworksToolbar';
import { StyledTabs, StyledTab } from '../../../common/StyledTabs';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import _ from '@lodash';

const useStyles = makeStyles(theme => ({
  paper: {
  	borderRadius: 10,
  },
}));

function Reporting () {
	const classes = useStyles();

	const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgets);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<div className="w-full">
			<div className="flex flex-1 flex-col min-w-0 container sm:p-8">
				<div className="flex justify-between p-40">
					<Typography className="text-36 font-600">
						Reporting
					</Typography>
	      </div>

	      <Paper className="m-16 mx-40">
	      	<Typography className="p-16">
		      	Select the network you want to see graphs and reports
	      	</Typography>

					<NetworksToolbar />
	      </Paper>

	      <div className="flex justify-center">
					<StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
	          <StyledTab label="Growth" />
	          <StyledTab label="Reach" />
	          <StyledTab label="Engagement" />
	          <StyledTab label="Contested" />
	        </StyledTabs>
        </div>

				<div className="widget flex w-full sm:w-1/2 p-12">
					<Widget1 widget={widgets.widget6} />
				</div>
			</div>
		</div>
	)
}

export default withReducer('reporting', reducer)(Reporting);
