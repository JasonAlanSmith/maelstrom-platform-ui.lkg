import React, { FC, ReactElement } from 'react';

interface IProps {
  value: string;
  caption: string;
}

export const DashboardDatum: FC<IProps> = (props): ReactElement => (
  <div className="e-card m-2">
    <div className="e-card-header">
      <div className="e-card-header-caption">
        <div className="e-card-title">{props.caption}</div>
      </div>
    </div>
    <div className="e-card-content">{props.value}</div>
  </div>
);
