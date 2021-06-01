import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import FuseNavVerticalCollapse from './vertical/FuseNavVerticalCollapse';
import FuseNavVerticalGroup from './vertical/FuseNavVerticalGroup';
import FuseNavVerticalItem from './vertical/FuseNavVerticalItem';
import FuseNavVerticalLink from './vertical/FuseNavVerticalLink';
import FuseNavItem, { registerComponent } from './FuseNavItem';

/*
Register Fuse Navigation Components
 */
registerComponent('vertical-group', FuseNavVerticalGroup);
registerComponent('vertical-collapse', FuseNavVerticalCollapse);
registerComponent('vertical-item', FuseNavVerticalItem);
registerComponent('vertical-link', FuseNavVerticalLink);
registerComponent('vertical-divider', () => <Divider className="my-16" style={{backgroundColor: '#E2E2EA'}}/>);

const useStyles = makeStyles(theme => ({
	navigation: {
		'& .list-item': {
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.05)'
			},
			'&:focus:not(.active)': {
				backgroundColor: 'rgba(255, 255, 255, 0.06)'
			}
		}
	},
	verticalNavigation: {
		'&.active-square-list': {
			'& .list-item, & .active.list-item': {
				width: '100%',
				borderRadius: '0'
			}
		},
		'&.dense': {
			'& .list-item': {
				paddingTop: 0,
				paddingBottom: 0,
				height: 32
			}
		}
	},
}));

function FuseNavigation(props) {
	const classes = useStyles(props);
	const { navigation, active, dense, className } = props;

	const verticalNav = (
		<List
			className={clsx(
				'navigation whitespace-nowrap',
				classes.navigation,
				`active-${active}-list`,
				dense && 'dense',
				className
			)}
		>
			{navigation.map(_item => (
				<FuseNavItem key={_item.id} type={`vertical-${_item.type}`} item={_item} nestedLevel={0} />
			))}
		</List>
	);

	if (navigation.length > 0) {
		return verticalNav;
	} else {
		return null;
	}
}

FuseNavigation.propTypes = {
	navigation: PropTypes.array.isRequired
};

FuseNavigation.defaultProps = {
	layout: 'vertical'
};

export default React.memo(FuseNavigation);
