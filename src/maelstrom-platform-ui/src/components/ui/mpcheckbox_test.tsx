/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { MPCheckBox } from './mpcheckbox';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

describe('MPCheckBox', () => {
  it('should render', () => {
    function Wrap() {
      function handleCheckBox() {}
      return (
        <div>
          <MPCheckBox
            id="1"
            label="CheckBox"
            checked
            value="checked"
            change={handleCheckBox}
            readOnly={false}
            name="checkbox"
          />
        </div>
      );
    }

    const { container } = render(<Wrap />);
    const checkbox = container.getElementsByClassName('e-checkbox')[0];
    expect(checkbox).toBe(true);
  });
});
