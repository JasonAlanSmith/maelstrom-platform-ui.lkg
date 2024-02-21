'use client';

import React, { FC, ReactElement } from 'react';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

interface IProps {
  caption: string;
}

export const FormButton: FC<IProps> = (props): ReactElement => (
  <ButtonComponent cssClass="e-block m-2" type="submit">
    {props.caption}
  </ButtonComponent>
);
