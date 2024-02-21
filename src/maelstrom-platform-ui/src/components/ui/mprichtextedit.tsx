'use client';

import React, { FC, ReactElement } from 'react';

import {
  ChangeEventArgs,
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

interface IProps {
  id: string;
  value?: string;
  change: (e?: ChangeEventArgs) => void;
  readOnly: boolean;
}

export const MPRichTextEdit: FC<IProps> = (
  props: IProps,
): ReactElement | null => (
  <RichTextEditorComponent
    autoSaveOnIdle
    saveInterval={0}
    id={props.id}
    value={props.value}
    change={props.change}
    readonly={props.readOnly}
  >
    <Inject
      services={[
        Toolbar,
        Image,
        Link,
        HtmlEditor,
        QuickToolbar,
      ]}
    />
  </RichTextEditorComponent>
);
