import { frontendURL } from '../helper/URLHelper';

export const getSidebarItems = accountId => ({
  common: {
    routes: [
      'home',
      'inbox_dashboard',
      'inbox_conversation',
      'conversation_through_inbox',
      'notifications_dashboard',
      'profile_settings',
      'profile_settings_index',
      'label_conversations',
      'conversations_through_label',
      'team_conversations',
      'conversations_through_team',
      'notifications_index',
    ],
    menuItems: {
      assignedToMe: {
        icon: 'ion-chatbox-working',
        label: 'CONVERSATIONS',
        hasSubMenu: false,
        key: '',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
        toolTip: 'Conversation from all subscribed inboxes',
        toStateName: 'home',
      },
      contacts: {
        icon: 'ion-person',
        label: 'CONTACTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/contacts`),
        toStateName: 'contacts_dashboard',
      },
      notifications: {
        icon: 'ion-ios-bell',
        label: 'NOTIFICATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/notifications`),
        toStateName: 'notifications_dashboard',
      },
      report: {
        icon: 'ion-arrow-graph-up-right',
        label: 'REPORTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/reports`),
        toStateName: 'settings_account_reports',
      },
      settings: {
        icon: 'ion-settings',
        label: 'SETTINGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings`),
        toStateName: 'settings_home',
      },
    },
  },
  contacts: {
    routes: [
      'contacts_dashboard',
      'contacts_dashboard_manage',
      'contacts_labels_dashboard',
    ],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      contacts: {
        icon: 'ion-person',
        label: 'ALL_CONTACTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/contacts`),
        toStateName: 'contacts_dashboard',
      },
    },
  },
  reports: {
    routes: ['settings_account_reports', 'csat_reports'],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      reportOverview: {
        icon: 'ion-arrow-graph-up-right',
        label: 'REPORTS_OVERVIEW',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/reports/overview`),
        toStateName: 'settings_account_reports',
      },
      csatReports: {
        icon: 'ion-happy',
        label: 'CSAT',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/reports/csat`),
        toStateName: 'csat_reports',
      },
    },
  },
  settings: {
    routes: [
      'agent_list',
      'canned_list',
      'labels_list',
      'settings_inbox',
      'settings_inbox_new',
      'settings_inbox_list',
      'settings_inbox_show',
      'settings_inboxes_page_channel',
      'settings_inboxes_add_agents',
      'settings_inbox_finish',
      'settings_integrations',
      'settings_integrations_webhook',
      'settings_integrations_integration',
      'settings_applications',
      'settings_applications_webhook',
      'settings_applications_integration',
      'general_settings',
      'general_settings_index',
      'settings_teams_list',
      'settings_teams_new',
      'settings_teams_add_agents',
      'settings_teams_finish',
      'settings_teams_edit',
      'settings_teams_edit_members',
      'settings_teams_edit_finish',
    ],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      agents: {
        icon: 'ion-person-stalker',
        label: 'AGENTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/agents/list`),
        toStateName: 'agent_list',
      },
      teams: {
        icon: 'ion-ios-people',
        label: 'TEAMS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/teams/list`),
        toStateName: 'settings_teams_list',
      },
      inboxes: {
        icon: 'ion-archive',
        label: 'INBOXES',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/inboxes/list`),
        toStateName: 'settings_inbox_list',
      },
      labels: {
        icon: 'ion-pricetags',
        label: 'LABELS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/labels/list`),
        toStateName: 'labels_list',
      },
      cannedResponses: {
        icon: 'ion-chatbox-working',
        label: 'CANNED_RESPONSES',
        hasSubMenu: false,
        toState: frontendURL(
          `accounts/${accountId}/settings/canned-response/list`
        ),
        toStateName: 'canned_list',
      },
      settings_integrations: {
        icon: 'ion-flash',
        label: 'INTEGRATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/integrations`),
        toStateName: 'settings_integrations',
      },
      settings_applications: {
        icon: 'ion-asterisk',
        label: 'APPLICATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/applications`),
        toStateName: 'settings_applications',
      },
      general_settings_index: {
        icon: 'ion-gear-a',
        label: 'ACCOUNT_SETTINGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/general`),
        toStateName: 'general_settings_index',
      },
    },
  },
});
