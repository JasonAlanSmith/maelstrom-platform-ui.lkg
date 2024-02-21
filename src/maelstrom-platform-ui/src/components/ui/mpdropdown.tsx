'use client';

import React, { FC, ReactElement } from 'react';

import {
  ChangeEventArgs,
  DropDownListComponent,
} from '@syncfusion/ej2-react-dropdowns';

interface IProps {
  dataSource: string[];
  fields: { text: string; value: string };
  id: string;
  value?: string;
  change: (e?: ChangeEventArgs) => void;
  readOnly: boolean;
}

export const MPDropDown: FC<IProps> = (props): ReactElement => (
  <DropDownListComponent
    dataSource={props.dataSource}
    fields={props.fields}
    id={props.id}
    value={props.value}
    change={props.change}
    readonly={props.readOnly}
  />
);
