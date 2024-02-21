'use client';

import React, {
  FC,
  ReactElement,
} from 'react';

import {
  ChangedEventArgs,
  TextBoxComponent,
} from '@syncfusion/ej2-react-inputs';

interface IProps {
  id: string;
  value?: string;
  change: (e?: ChangedEventArgs) => void;
  readOnly: boolean;
  ref?: any;
  name?: string
  onBlur?: (e: any) => void;
}

export const MPTextBox: FC<IProps> = (props: IProps): ReactElement => (
  <TextBoxComponent
    id={props.id}
    value={props.value}
    change={props.change}
    readonly={props.readOnly}
    ref={props.ref}
    name={props.name}
    onBlur={props.onBlur}
  />
);
