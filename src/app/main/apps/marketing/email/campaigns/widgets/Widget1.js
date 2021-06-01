import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const networks = [
	{
		title: 'Facebook',
		icon: 'f',
		color: '#1877F2'
	},
	{
		title: 'Instagram',
		icon: 'instagram',
		color: '#F00073'
	},
	{
		title: 'Youtube',
		icon: 'youtube',
		color: '#FF0000'
	},
	{
		title: 'Twitter',
		icon: 'twitter',
		color: '#1DA1F2'
	},
	{
		title: 'Tiktok',
		icon: 'tiktok',
		color: '#161722'
	},
	{
		title: 'Google Business',
		icon: 'google_business',
		color: '#4285F4'
	},
	{
		title: 'Pinterest',
		icon: 'pinterest',
		color: '#E60023'
	},
	{
		title: 'Linkedin',
		icon: 'linkedin',
		color: '#2867B2'
	},
];

function Widget1(props) {

	const dispatch = useDispatch();

	const [icon, setIcon] = useState({
		title: "Facebook", 
		icon: "f",
		color: "#1877F2"
	});

	const [menu, setMenu] = useState(null);

	const networkMenuClick = event => {
		setMenu(event.currentTarget);
		console.log(menu)
	};

	const networkMenuClose = () => {
		setMenu(null);
	};

	function handleNetworkChange(net) {
		networkMenuClose();
		setIcon({
			title: net.title, 
			icon: net.icon,
			color: net.color
		})
	}

	return (
		<>
			<Button className="h-32 min-w-240" variant="outlined" onClick={networkMenuClick}>
				<img
					src={"assets/images/icons/" + icon.icon + ".svg"}
					style={{
						backgroundColor: icon.color,
						borderRadius: "50%",
						width: "24px",
						height: "24px",
						padding: "5px"
					}}
					alt={icon.title}
				/>

				<Typography className="mx-4 font-bold text-12" color="textSecondary">
					{icon.title}
				</Typography>

				<Icon className="text-24">expand_more</Icon>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={networkMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{networks.map(net => (
					<MenuItem key={net.title} onClick={() => handleNetworkChange(net)}>
						<ListItemIcon className="min-w-40">
							<img 
								className="min-w-20" 
								src={`assets/images/icons/${net.icon}.svg`} 
								style={{
									backgroundColor: net.color, 
									borderRadius: "50%",
									width: "24px",
									height: "24px",
									padding: "5px"
								}} 
								alt={net.title} 
							/>
						</ListItemIcon>
						<ListItemText primary={net.title} />
					</MenuItem>
				))}

			</Popover>
		</>
	);
}

export default Widget1;
