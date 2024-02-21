/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { DashboardDatum } from './dashboard_datum';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

describe('DashboardDatum', () => {
  it('should render', () => {
    const { getByText } = render(
      <DashboardDatum caption="Dashboard 1" value="1" />,
    );
    expect(getByText('Dashboard 1')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });
});
