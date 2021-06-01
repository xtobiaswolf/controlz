import React from 'react';

const SocialNetworksConfig = {
	settings: {
		layout: {
			config: {
				rightSidePanel: {
					display: false
				},
				footer: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/marketing/social/panel',
			component: React.lazy(() => import('./panel/Panel'))
		},
		{
			path: '/marketing/social/publications',
			component: React.lazy(() => import('./publications/Publications'))
		},
		{
			path: '/marketing/social/calendar',
			component: React.lazy(() => import('./calendar/CalendarApp'))
		},
		{
			path: '/marketing/social/messages',
			component: React.lazy(() => import('./messages/Messages'))
		},
		{
			path: '/marketing/social/feeds',
			component: React.lazy(() => import('./feeds/Feeds'))
		},
		{
			path: '/marketing/social/reporting',
			component: React.lazy(() => import('./reporting/Reporting'))
		}
	]
};

export default SocialNetworksConfig;
