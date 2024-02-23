import React, {
  FC,
  ReactElement,
  ReactNode,
} from 'react';

import { ApplicationHeader } from './application_header';
import { ApplicationMenu } from './application_menu';
import { ServiceMenu } from './service_menu';

interface choice {
  caption: string;
  route: string;
}

interface IProps {
  serviceName: string;
  choices: choice[];
  children: ReactNode;
}

export const ServiceShell: FC<IProps> = (props): ReactElement => {
  const choices = [
    {
      caption: 'Home',
      route: '/services/home',
    },
    {
      caption: 'Product',
      route: '/services/product',
    },
    {
      caption: 'Customer',
      route: '/customer',
    },
    {
      caption: 'Location',
      route: '/location',
    },
    {
      caption: 'Backlog',
      route: '/services/backlog',
    },
    {
      caption: 'Iteration',
      route: '/iteration',
    },
    {
      caption: 'Release',
      route: '/release',
    },
    {
      caption: 'User Story',
      route: '/services/user-story',
    },
    {
      caption: 'Requirement',
      route: '/requirement',
    },
    {
      caption: 'Test Case',
      route: '/test-case',
    },
    {
      caption: 'Project',
      route: '/project',
    },
    {
      caption: 'Team',
      route: '/team',
    },
    {
      caption: 'Task',
      route: '/task',
    },
    {
      caption: 'Tag',
      route: '/tag',
    },
    {
      caption: 'Administration',
      route: '/administration',
    },
    {
      caption: 'Accounting',
      route: '/accounting',
    },
    {
      caption: 'Activity Log',
      route: '/activity-log',
    },
    {
      caption: 'Analytics',
      route: '/analytics',
    },
    {
      caption: 'Audit Log',
      route: '/audit-log',
    },
    {
      caption: 'Build',
      route: '/build',
    },
    {
      caption: 'Calendar',
      route: '/calendar',
    },
    {
      caption: 'Source Code Review',
      route: '/source-code-review',
    },
    {
      caption: 'Communication',
      route: '/communication',
    },
    {
      caption: 'Component',
      route: '/component',
    },
    {
      caption: 'Configuration',
      route: '/configuration',
    },
    {
      caption: 'Customer Care (Support)',
      route: '/customer-care-support',
    },
    {
      caption: 'Dashboard',
      route: '/dashboard',
    },
    {
      caption: 'Data Dictionary',
      route: '/data-dictionary',
    },
    {
      caption: 'Device',
      route: '/device',
    },
    {
      caption: 'Discussion',
      route: '/discussion',
    },
    {
      caption: 'Document',
      route: '/document',
    },
    {
      caption: 'Engineering (Development)',
      route: '/engineering-development',
    },
    {
      caption: 'Help',
      route: '/help',
    },
    {
      caption: 'Implementation',
      route: '/implementation',
    },
    {
      caption: 'Issue',
      route: '/issue',
    },
    {
      caption: 'License',
      route: '/license',
    },
    {
      caption: 'Marketing',
      route: '/marketing',
    },
    {
      caption: 'Organization',
      route: '/organization',
    },
    {
      caption: 'Person',
      route: '/person',
    },
    {
      caption: 'Quality Assurance',
      route: '/quality-assurance',
    },
    {
      caption: 'Release Note',
      route: '/release-note',
    },
    {
      caption: 'Report',
      route: '/report',
    },
    {
      caption: 'Roadmap',
      route: '/roadmap',
    },
    {
      caption: 'Sales',
      route: '/sales',
    },
    {
      caption: 'Source Code',
      route: '/source-code',
    },
    {
      caption: 'System',
      route: '/system',
    },
    {
      caption: 'Vendor',
      route: '/vendor',
    },
  ];

  return (
    <div>
      <ApplicationHeader />
      <div className="row">
        <div className="col-lg-12">
          <h1>
            {props.serviceName}
            {' '}
            Information Center
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <ServiceMenu choices={props.choices} />
        </div>
        <div className="col-lg-10">{props.children}</div>
      </div>
      <ApplicationMenu choices={choices} />
    </div>
  );
};
