import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Icon from '@material-ui/core/Icon';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
	marketingNavigationConfig,
	managementNavigationConfig,
	financialNavigationConfig
} from 'app/fuse-configs/navigationConfig';
import { setNavigation } from 'app/store/fuse/navigationSlice';

const useStyles = makeStyles(theme => ({
	selectButton: {
		width: '100%',
		height: 60,
		backgroundColor: '#ECF5FF',
		color: '#002C5D',
		borderRadius: 0,
		fontSize: 18,
		"&:hover": {
        backgroundColor: "#ECF5FF"
    }
	},
	popover: {
	  borderRadius: 0,
	  width: 280
	},
	selectItem: {
		height: 40,
		backgroundColor: '#ECF5FF',
		color: '#002C5D',
		fontSize: 18,
		"&:hover": {
        backgroundColor: "#ECF5FF"
    }
	}
}));

const choice = [
	{
		title: 'Marketing',
		url: 'marketing/social/panel'
	},
	{
		title: 'Management',
		url: 'management'
	},
	{
		title: 'Financial',
		icon: 'financial'
	}
];

function ThemeButton(props) {
	const classes = useStyles();

	const [item, setItem] = useState({
		title: 'Marketing',
		url: 'marketing/social/panel'
	});

	const [menu, setMenu] = useState(null);

	const menuClick = event => {
		setMenu(event.currentTarget);
		console.log(menu)
	};

	const menuClose = () => {
		setMenu(null);
	};

	const dispatch = useDispatch();

	function handleMenuChange(it) {
		menuClose();
		setItem({
			title: it.title,
			url: it.url
		});

		switch (it.title) {
			case 'Marketing':
				dispatch(setNavigation(marketingNavigationConfig));
				break;
			case 'Management':
				dispatch(setNavigation(managementNavigationConfig));
				break;
			case 'Financial':
				dispatch(setNavigation(financialNavigationConfig));
				break;
			default:
				break
		}
	}

	return (
		<>
			<Button className={classes.selectButton} onClick={menuClick} disableRipple>
				{item.title}
				<Icon className="text-24 absolute right-12">expand_more</Icon>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={menuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
			  marginThreshold={0}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				classes={{paper: classes.popover}}
			>
				{choice.map(it => (
					<MenuItem 
						key={it.title} 
						onClick={() => handleMenuChange(it)} 
						className={classes.selectItem}
					>
						<ListItemText primary={it.title}/>
					</MenuItem>
				))}

			</Popover>
		</>
	);
}

export default ThemeButton;
