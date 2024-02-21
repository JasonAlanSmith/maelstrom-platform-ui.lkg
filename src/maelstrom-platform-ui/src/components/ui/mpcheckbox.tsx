'use client';

import React, { FC, ReactElement } from 'react';

import {
  ChangeEventArgs,
  CheckBoxComponent,
} from '@syncfusion/ej2-react-buttons';

interface IProps {
  id: string;
  label: string;
  checked: boolean;
  value?: string;
  change: (e?: ChangeEventArgs) => void;
  readOnly: boolean;
  name: string;
}

export const MPCheckBox: FC<IProps> = (props): ReactElement => (
  <CheckBoxComponent
    id={props.id}
    label={props.label}
    checked={props.checked}
    change={props.change}
    disabled={props.readOnly}
    name={props.name}
  />
);
