import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function Widget6(props) {
	const theme = useTheme();
	const [dataset, setDataset] = useState('today');
	const data = _.merge({}, props.data);

	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.text.secondary);
	_.setWith(data, 'options.scales.yAxes[0].ticks.fontColor', theme.palette.text.secondary);
	_.setWith(data, 'options.scales.yAxes[0].gridLines.color', fade(theme.palette.text.secondary, 0.1));

	return (
		<Card className="w-full rounded-10 shadow">
			<div className="relative p-24 flex flex-row items-center justify-between">
				<div className="flex flex-col">
					<Typography className="h3 sm:h2">New users over time</Typography>
				</div>

				<div className="flex flex-row items-center">
					{Object.keys(data.datasets).map(key => (
						<Button
							key={key}
							className="py-8 px-12"
							size="small"
							onClick={() => setDataset(key)}
							disabled={key === dataset}
						>
							{key}
						</Button>
					))}
				</div>
			</div>

			<Typography className="relative h-200 sm:h-320 sm:pb-16">
				<Line
					data={{
						labels: data.labels,
						datasets: data.datasets[dataset].map((obj, index) => {
							const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
							return {
								...obj,
								borderColor: palette.main,
								pointHoverBackgroundColor: palette.main,
							};
						})
					}}
					options={data.options}
				/>
			</Typography>
		</Card>
	);
}

export default React.memo(Widget6);
