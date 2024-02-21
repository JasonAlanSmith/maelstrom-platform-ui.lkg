/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import React from 'react';

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import { MPGrid } from './mpgrid';

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

describe('MPGrid', () => {
  it('should render', () => {
    const src = [{ id: 1, name: 'Test' }];
    const colDirectives = [
      {
        field: 'id',
        headerText: 'ID',
        width: '100',
        format: '',
        textAlign: 'Left',
      },
    ];
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
        <MPGrid
          data={src}
          columnDirectives={colDirectives}
          serviceName="mpgrid"
        />
      </div>,
    );

    const gridElem = container.getElementsByClassName('e-grid');
    const gridInst = (gridElem as any)[0].ej2_instances[0];
    expect(gridInst.dataSource).toHaveLength(1);
  });
});
