import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React from 'react';

function NotificationsButton({ className }) {
	return (
		<Button
			rel="noreferrer noopener"
			role="button"
			className={clsx('', className)}
		>
			<Badge color="error" overlap="circle" variant="dot">
				<Icon className="text-24">notifications</Icon>
			</Badge>
			<span className="mx-4">Notifications</span>
		</Button>
	);
}

export default NotificationsButton;
