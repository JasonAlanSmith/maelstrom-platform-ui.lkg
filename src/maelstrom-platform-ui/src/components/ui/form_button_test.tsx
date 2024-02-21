/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { FormButton } from './form_button';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

describe('FormButton', () => {
  it('should render', () => {
    const { getByText } = render(
      <FormButton caption="Hello, world!" />,
    );

    expect(getByText('Hello, world!')).toBeInTheDocument();
    expect(getByText('Hello, world!').getAttribute('type')).toBe(
      'submit',
    );
  });
});
