/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { MPDatePicker } from './mpdatepicker';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

describe('MPDatePicker', () => {
  it('should render', () => {
    const handleChange = () => {};
    const { container } = render(
      <div>
        <MPDatePicker
          id="1"
          value={new Date('2/10/2024')}
          change={handleChange}
          readOnly={false}
        />
      </div>,
    );

    expect(
      container
        .getElementsByClassName('e-datepicker')[0]
        .getAttribute('value'),
    ).toBe('2/10/2024');
  });
});
