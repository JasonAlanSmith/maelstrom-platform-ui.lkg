/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { MPDropDown } from './mpdropdown';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

expect.extend({ toBeInTheDocument });

describe('MPDropDown', () => {
  it('should render', () => {
    const handleChange = () => {};
    const src = ['DropDown'];
    const fields = { text: 'name', value: 'id' };

    const { getComputedStyle } = global.window;
    window.crypto = {
      subtle: {
        decrypt: jest.fn(),
        deriveBits: jest.fn(),
        deriveKey: jest.fn(),
        digest: jest.fn(),
        encrypt: jest.fn(),
        exportKey: jest.fn(),
        generateKey: jest.fn(),
        importKey: jest.fn(),
        sign: jest.fn(),
        unwrapKey: jest.fn(),
        verify: jest.fn(),
        wrapKey: jest.fn(),
      },
      getRandomValues: jest.fn(),
      randomUUID: jest.fn(),
    };
    window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);

    const { container } = render(
      <div>
        <MPDropDown
          dataSource={src}
          fields={fields}
          id="1"
          value="DropDown"
          change={handleChange}
          readOnly={false}
        />
      </div>,
    );

    expect(
      container
        .getElementsByClassName('e-dropdownlist')[0]
        .getAttribute('value'),
    ).toBe('DropDown');
  });
});
