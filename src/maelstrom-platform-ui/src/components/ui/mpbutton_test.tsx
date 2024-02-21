/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { MPButton } from './mpbutton';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('MPButton', () => {
  it('should render', () => {
    const { getByText } = render(
      <MPButton caption="Home" route="/" />,
    );

    expect(getByText('Home')).toBeInTheDocument();
  });
});
