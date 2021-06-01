import React from 'react';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
  	backgroundColor: '#ffffff',
  	border: '2px solid #E2E2EA',
  	borderRadius: 10,
  	marginTop: -10
  },
  addpaper: {
  	backgroundColor: '#ffffff',
  	border: '2px solid #E2E2EA',
  	borderRadius: 10,
  	display: 'flex',
  	flexDirection: 'column',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  plus: {
  	borderRadius: '50%',
  	backgroundColor: '#f1c5f1',
  	width: 100,
  	height: 100,
  	margin: 50,
  	textAlign: 'center',
  	verticalAlign: 'middle',
  	display: 'table-cell'
  }
}));

function Widget7(props) {
  const classes = useStyles();

	return (
		<Card className="w-full h-500 rounded-10 shadow">
			<div className="px-32 py-16">
				<div className="flex justify-between py-16">
					<Typography className="h3 sm:h2 d-flex font-bold">Publications</Typography>
					<Typography className="h3 sm:h2 d-flex">Upcoming publications</Typography>
					<Typography className="h3 sm:h2 d-flex font-bold text-pink underline" color="red">View calendar</Typography>
				</div>
				<div className="flex flex-row w-full">
					<div className="sm:w-1/3 p-16">
	          <Paper className={classes.addpaper} variant="outlined">
	          	<div className={classes.plus}>
	          		<Icon style={{fontSize: 48, color:'red', marginTop: 26}}>add</Icon>
	          	</div>
							<Typography className="text-28 font-bold text-pink">
								New post
		          </Typography>
		          <Typography className="p-16 py-32 text-gray text-center">
		          	Schedule or publish now on all your social networks
		          </Typography>
	          </Paper>
					</div>
					<Divider style={{backgroundColor: '#E2E2EA'}}/>
					<div className="sm:w-1/3 p-16">
						<img 
							src="/material-ui-static/images/cards/contemplative-reptile.jpg" 
							style={{
								borderRadius: '10px 10px 0 0',
							}}
							alt="pic"
						/>
	          <Paper className={classes.paper} variant="outlined">
							<Typography className="p-16 pb-0">
								Status:
								<span className="text-green font-bold pl-10">Approved</span>
		          </Typography>
		          <Typography className="flex flex-row p-16 py-8">
		          	Social networks:
								<img 
									className="min-w-20" 
									src={`assets/images/icons/f.svg`} 
									style={{
										backgroundColor: '#1877F2', 
										borderRadius: "50%",
										width: "20px",
										height: "20px",
										padding: "2px",
										marginLeft: 5
									}} 
									alt="facebook" 
								/>
		          </Typography>
		          <div className="flex flex-row p-16 py-8">
		          	<Button style={{color: "#FF6B17", backgroundColor: '#FF6B171A', borderRadius: "50%"}}>
		          		<Icon>schedule</Icon>
		          		Scheduled
		        		</Button>
			          <Typography className="font-bold py-8">
			          	Jan 29, 2020 at 7:30 am
			          </Typography>
		          </div>
	          </Paper>
					</div>
				</div>
			</div>
		</Card>
	);
}

export default Widget7;
