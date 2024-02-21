import React, { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  title: string;
}

export const DashboardGraph: FC<IProps> = (props): ReactElement => (
  <div className="e-card m-2">
    <div className="e-card-header">
      <div className="e-card-header-caption">
        <div className="e-card-title">{props.title}</div>
      </div>
    </div>
    <div className="e-card-content">{props.children}</div>
  </div>
);
