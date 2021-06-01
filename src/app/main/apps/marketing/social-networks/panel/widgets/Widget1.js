import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icons from 'app/icons/Icons';

const networks = [
	{
		title: 'Facebook',
		icon: 'f'
	},
	{
		title: 'Instagram',
		icon: 'instagram'
	},
	{
		title: 'Youtube',
		icon: 'youtube'
	},
	{
		title: 'Twitter',
		icon: 'twitter'
	},
	{
		title: 'Tiktok',
		icon: 'tiktok'
	},
	{
		title: 'Google Business',
		icon: 'google_business'
	},
	{
		title: 'Pinterest',
		icon: 'pinterest'
	},
	{
		title: 'Linkedin',
		icon: 'linkedin'
	},
];

function Widget1(props) {

	const dispatch = useDispatch();

	const [icon, setIcon] = useState({
		title: "Facebook", 
		icon: "f",
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
			icon: net.icon
		})
	}

	return (
		<>
			<Button className="h-32 min-w-240" variant="outlined" onClick={networkMenuClick}>
				<Icons value={icon.icon} />

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
							<Icons value={net.icon} />
						</ListItemIcon>
						<ListItemText primary={net.title} />
					</MenuItem>
				))}

			</Popover>
		</>
	);
}

export default Widget1;
