import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

function Marker(props) {
	return (
		<Tooltip title={props.text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}

function Widget7(props) {
	return (
		<Card className="w-full h-500 rounded-10 shadow">
			<div className="px-32 py-16">
				<div className="d-flex flex-row justify-content-between py-16">
					<Typography className="h3 sm:h2 d-flex">Publications</Typography>
					<Typography className="h3 sm:h2 d-flex">Upcoming publications</Typography>
					<Typography className="h3 sm:h2 d-flex">View calendar</Typography>
				</div>
				<div className="w-full sm:w-1/3 rounded-10">
					<img src="/material-ui-static/images/cards/contemplative-reptile.jpg" alt="pic"/>
					<Typography className="p-16 pb-0">
						Status:
						<span className="text-green">Approved</span>
          </Typography>
          <Typography className="p-16 py-8">
          	Social networks:
          </Typography>
          <div className="flex flex-row p-16 py-8">
          	<Button style={{color: "red", borderRadius: "50%"}}>
          		<Icon>schedule</Icon>
          		Scheduled
        		</Button>
	          <Typography className="font-600 py-8">
	          	Jan 29, 2020 at 7:30 am
	          </Typography>
          </div>
				</div>
			</div>
		</Card>
	);
}

export default Widget7;
