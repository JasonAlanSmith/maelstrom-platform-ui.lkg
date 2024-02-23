import { v4 as uuidv4 } from 'uuid';

import { baseUrl } from '../../utils/common';

interface ActivityLog {
  sid: string;
  fid: string;
  tenant_sid: string;
  dt: string;
  srv_sid: string;
  acn_sid: string;
  msg: string;
  usr_sid: string;
  err: string;
  stk_trc: string;
  fl: string;
  ln_no: string;
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

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function log(
  tenantSid: string,
  service: string,
  action: string,
  message: string,
  error: string,
  stackTrace: string,
  user: string,
  level: string,
  fileName: string,
  lineNumber: string,
  functionName: string,
  variable: string,
  value: string,
): number {
  const activityDate = new Date();
  const sid = uuidv4();
  const nextFid = random(1, 5000);

  const activity: ActivityLog = {
    sid,
    fid: nextFid.toString(),
    tenant_sid: tenantSid,
    dt: new Date().toISOString(),
    srv_sid: service,
    acn_sid: action,
    msg: message,
    usr_sid: user,
    err: error,
    stk_trc: stackTrace,
    fl: fileName,
    ln_no: lineNumber,
    fnc: functionName,
    var: variable,
    val: value,
    is_del: false,
    cre_by_sid: user,
    cre_on_dt: activityDate,
    upd_by_sid: user,
    upd_on_dt: activityDate,
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(activity),
  };

  fetch(`${baseUrl}/activity-log`, requestOptions).catch(() => -1);

  return 0;
}
