import i18next from 'i18next';
import en from './navigation-i18n/en';
import pt from './navigation-i18n/pt';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('pt', 'navigation', pt);

export const marketingNavigationConfig = [
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'social-networks',
		title: 'Social Networks',
		translate: 'SOCIAL NETWORKS',
		type: 'group',
		children: [
			{
				id: 'panel',
				title: 'Panel',
				translate: 'Panel',
				type: 'item',
				icon: 'dashboard',
				url: '/marketing/social/panel'
			},
			{
				id: 'publications',
				title: 'Publications',
				translate: 'Publications',
				type: 'item',
				icon: 'dashboard',
				url: '/marketing/social/publications'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				translate: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/marketing/social/calendar'
			},
			{
				id: 'messages',
				title: 'Messages',
				translate: 'Messages',
				type: 'item',
				icon: 'chat',
				url: '/marketing/social/messages'
			},
			{
				id: 'feeds',
				title: 'Feeds',
				translate: 'Feeds',
				type: 'item',
				icon: 'mail',
				url: '/marketing/social/feeds'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				translate: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/marketing/social/reporting'
			}
		]
	},
	{
		id: 'e-mail',
		title: 'E-mail MKT',
		translate: 'E-MAIL MARKETING',
		type: 'group',
		children: [
			{
				id: 'campaigns',
				title: 'Campaigns',
				translate: 'Campaigns',
				type: 'item',
				icon: 'chat',
				url: '/marketing/email/campaigns'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				translate: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/marketing/email/calendar'
			},
			{
				id: 'lists',
				title: 'Lists',
				translate: 'Lists',
				type: 'item',
				icon: 'lists',
				url: '/marketing/email/lists'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				translate: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/marketing/email/reporting'
			}
		]
	},
];

export const managementNavigationConfig = [
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'management',
		title: 'Management',
		translate: 'MANAGEMENT',
		type: 'group',
		children: [
			{
				id: 'teams',
				title: 'Teams',
				translate: 'Teams',
				type: 'item',
				icon: 'dashboard',
				url: '/management/teams'
			},
			{
				id: 'members',
				title: 'Members',
				translate: 'Members',
				type: 'item',
				icon: 'dashboard',
				url: '/management/members'
			},
			{
				id: 'tasks',
				title: 'Tasks',
				translate: 'Tasks',
				type: 'item',
				icon: 'today',
				url: '/management/tasks'
			},
			{
				id: 'permits',
				title: 'Permits',
				translate: 'Permits',
				type: 'item',
				icon: 'chat',
				url: '/management/permits'
			}
		]
	},
];

export const financialNavigationConfig = [
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'financial',
		title: 'Financial',
		translate: 'FINANCIAL',
		type: 'group',
		children: [
			{
				id: 'panel',
				title: 'Panel',
				translate: 'Panel',
				type: 'item',
				icon: 'today',
				url: '/financial/panel'
			},
			{
				id: 'purchases',
				title: 'Purchases',
				translate: 'Purchases',
				type: 'item',
				icon: 'today',
				url: '/financial/purchases'
			},
			{
				id: 'sales',
				title: 'Sales',
				translate: 'Sales',
				type: 'item',
				icon: 'today',
				url: '/financial/sales'
			},
			{
				id: 'registrations',
				title: 'Registrations',
				translate: 'Registrations',
				type: 'item',
				icon: 'today',
				url: '/financial/registrations'
			},
			{
				id: 'institutions',
				title: 'Institutions',
				translate: 'Institutions',
				type: 'item',
				icon: 'today',
				url: '/financial/institutions'
			},
			{
				id: 'reports',
				title: 'Reports',
				translate: 'Reports',
				type: 'item',
				icon: 'today',
				url: '/financial/reports'
			},
		]
	},
];

export default marketingNavigationConfig;
