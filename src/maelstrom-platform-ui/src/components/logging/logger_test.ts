/* eslint-disable @typescript-eslint/no-namespace */

import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import { log } from './logger';

interface ActivityLog {
  sid: string;
  fid: number;
  tenant_sid: string;
  dt: Date;
  srv_sid: string;
  acn_sid: string;
  msg: string;
  usr_sid: string;
  err: string;
  stk_trc: string;
  fl: string;
  ln_no: number;
  fnc: string;
  var: string;
  val: string;
  is_del: boolean;
  del_by_sid?: string;
  del_on_dt?: Date;
  cre_by_sid: string;
  cre_on_dt: Date;
  upd_by_sid: string;
  upd_on_dt: Date;
}

const a: ActivityLog = {
  sid: 'a8f87133-83af-4cdc-9c84-5a41d0a1945a',
  fid: 1,
  tenant_sid: '413f5d2f-50c3-4f09-b7b0-11cfe8a70b3f',
  dt: new Date(),
  srv_sid: 'f0a7dd06-1156-4702-a42c-8d482676b9be',
  acn_sid: '55c39966-2603-4d91-8fa9-24992a6fcfc0',
  msg: 'Hello, from the Activity Log service!',
  usr_sid: '8200e71a-6547-4209-b169-b5128b0ab55e',
  err: 'This is the error.',
  stk_trc: 'This is the stack trace.',
  fl: 'filename.js',
  ln_no: 1,
  fnc: 'FunctionName',
  var: 'variableName',
  val: 'variableValue',
  is_del: false,
  cre_by_sid: '3fefe77d-357f-49d5-a986-a3cccd0e8745',
  cre_on_dt: new Date(),
  upd_by_sid: 'd91f3533-db9d-4812-a5de-97306ce38a56',
  upd_on_dt: new Date(),
};

expect.extend({ toBeInTheDocument });

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(a),
})) as jest.Mock;

describe('log', () => {
  it('should render', () => {
    const result = log(
      a.tenant_sid,
      a.srv_sid,
      a.acn_sid,
      a.msg,
      a.err,
      a.stk_trc,
      a.usr_sid,
      'TEST',
      a.fl,
      a.ln_no.toString(),
      a.fnc,
      a.var,
      a.val,
    );

    expect(result).toBe(0);
  });
});
