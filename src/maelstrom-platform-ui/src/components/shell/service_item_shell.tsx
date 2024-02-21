import React, { FC, ReactElement, ReactNode } from 'react';

import { ServiceItemMenu } from './service_item_menu';

interface choice {
  caption: string;
  route: string;
}

interface IProps {
  choices: choice[];
  children: ReactNode;
}

export const ServiceItemShell: FC<IProps> = (props): ReactElement => (
  <div>
    <div className="row">
      <div className="col-lg-12">
        <ServiceItemMenu choices={props.choices} />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">{props.children}</div>
    </div>
  </div>
);
