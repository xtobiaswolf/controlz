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
			path: '/marketing/email/campaigns',
			component: React.lazy(() => import('./campaigns/Campaigns'))
		},
		{
			path: '/marketing/email/calendar',
			component: React.lazy(() => import('./calendar/Calendar'))
		},
		{
			path: '/marketing/email/lists',
			component: React.lazy(() => import('./lists/Lists'))
		},
		{
			path: '/marketing/email/reporting',
			component: React.lazy(() => import('./reporting/Reporting'))
		}
	]
};

export default SocialNetworksConfig;
