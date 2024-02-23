'use client';

import React, {
  FC,
  ReactElement,
} from 'react';

import { MPButton } from '../ui/mpbutton';

interface choice {
  caption: string;
  route: string;
}

interface IProps {
  choices: choice[];
}

export const ApplicationMenu: FC<IProps> = (props): ReactElement => (
  <div className="row">
    {props.choices.map((choice) => (
      <div key={choice.caption} className="col-lg-2">
        <MPButton
          caption={choice.caption}
          route={choice.route}
        />
      </div>
    ))}
  </div>
);
