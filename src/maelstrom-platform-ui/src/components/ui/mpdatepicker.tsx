'use client';

import React, { FC, ReactElement } from 'react';

import {
  ChangedEventArgs,
  DatePickerComponent,
} from '@syncfusion/ej2-react-calendars';

interface IProps {
  id: string;
  value?: Date;
  change: (e?: ChangedEventArgs) => void;
  readOnly: boolean;
}

export const MPDatePicker: FC<IProps> = (
  props: IProps,
): ReactElement => (
  <DatePickerComponent
    id={props.id}
    value={props.value}
    change={props.change}
    readonly={props.readOnly}
  />
);
