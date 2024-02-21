'use client';

import React, { FC, ReactElement } from 'react';

import { useRouter } from 'next/navigation';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

interface IProps {
  caption: string
  route?: string
  click?: (e: any) => void
  css?: string
  block?: boolean
  type?: string
}

export const MPButton: FC<IProps> = (props: IProps): ReactElement | null => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault;
    router.push(props.route ?? '');
  };

  let css = props.block ? 'e-block m-2 e-primary' : 'm-2 e-primary';
  css = props.css ? `${css} ${props.css}` : css;

  return (
    <ButtonComponent
      cssClass={css}
      onClick={props.click || handleClick}
      type={props.type}
    >
      {props.caption}
    </ButtonComponent>
  );
};
