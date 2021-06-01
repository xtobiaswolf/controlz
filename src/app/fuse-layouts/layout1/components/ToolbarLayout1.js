import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
import SettingsButton from '../../shared-components/SettingsButton';
import NotificationsButton from '../../shared-components/NotificationsButton';

const useStyles = makeStyles(theme => ({
	root: {}
}));

function ToolbarLayout1(props) {
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(selectToolbarTheme);

	const classes = useStyles(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className={clsx(classes.root, 'flex relative z-10 shadow-md')}
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.paper }}
			>
				<Toolbar className="p-0 min-h-48 md:min-h-64">
					{config.navbar.display && config.navbar.position === 'left' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
						</Hidden>
					)}

					<div className="flex flex-1">
						<Hidden mdDown>
				    	<img style={{width: 133, marginLeft: "2rem"}} src="assets/images/logos/logo.png" alt="logo" />
						</Hidden>
					</div>

					<div className="flex items-center px-8">
						<LanguageSwitcher />

						<SettingsButton />

						<NotificationsButton />

						<UserMenu />

						<Button
							component="a"
							href="/"
							rel="noreferrer noopener"
							role="button"
						>
							<Icon className="text-24" style={{color: "red"}}>exit_to_app</Icon>
							<span className="mx-4" style={{color: "red"}}>Go out</span>
						</Button>

					</div>

					{config.navbar.display && config.navbar.position === 'right' && (
						<Hidden lgUp>
							<NavbarMobileToggleButton />
						</Hidden>
					)}
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout1);
