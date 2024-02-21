/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { ApplicationMenu } from './application_menu';

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

describe('ApplicationMenu', () => {
  it('should render', () => {
    const choices = [{ caption: 'Home', route: '/' }];
    const { getByText } = render(
      <ApplicationMenu choices={choices} />,
    );
    expect(getByText('Home')).toBeInTheDocument();
  });
});
