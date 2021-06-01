import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';

function Widget2(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-10 shadow">
			<div className="p-16 flex flex-row flex-wrap items-end">
				<div className="p-8 flex items-center">
					{data.conversion.ofTarget > 0 && <Icon className="text-green text-48">arrow_upward</Icon>}
					{data.conversion.ofTarget < 0 && <Icon className="text-red text-48">arrow_downward</Icon>}
				</div>

				<div className="flex flex-col">
					<div className="flex flex-row items-center">
						<Typography className="text-28 font-bold">1000</Typography>
						{data.conversion.ofTarget > 0 && <Typography className="text-green text-16 font-bold float-right">{data.conversion.ofTarget}%</Typography>}
						{data.conversion.ofTarget < 0 && <Typography className="text-red text-16 font-bold">{data.conversion.ofTarget}%</Typography>}
					</div>
					<Typography className="whitespace-nowrap text-14">New followers</Typography>
				</div>
			</div>
		</Card>
	);
}

export default React.memo(Widget2);
