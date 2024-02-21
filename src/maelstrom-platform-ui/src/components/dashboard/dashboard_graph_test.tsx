/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { DashboardGraph } from './dashboard_graph';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

describe('DashboardGraph', () => {
  it('should render', () => {
    const { getByText } = render(
      <DashboardGraph title="Dashboard Graph 1">
        <p>1</p>
      </DashboardGraph>,
    );
    expect(getByText('Dashboard Graph 1')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });
});
