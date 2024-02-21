'use client';

import React, { useContext } from 'react';

import { useRouter } from 'next/navigation';
import { v4 } from 'uuid';

import {
  apiCall,
  baseUrl,
} from '@/utils/common';

import { Organization } from '../../interfaces/organization';
import { MaelstromContext } from '../../utils/context';
import { MPButton } from '../ui/mpbutton';

const createUser = (
  firstName: string,
  lastName: string,
  userName: string,
  password: string,
): string => {
  // Create Clerk user via API
  // Looks like we can't do this until we're
  // in production. Stupid. Just stupid.
  // For now, can't test this, and will have to
  // mock user creation and test this in production.

  const err = 0;

  /*
    const err = clerkClient.users.createUser({
        firstName: firstName,
        lastName: lastName,
        username: userName,
        password: password,
    });
    */

  // Get new Clerk user's ID
  // For now, mock the data
  const clerkUserId = '_user7f9affa7a88af';

  if (!err) {
    return clerkUserId;
  }
  return err;
};

const buildOrganization = (
  organizationName: string,
  clerkUserId: string,
) => {
  const newOrgSid = v4();
  const creUpdDt = new Date().toISOString();

  const newOrg: Organization = {
    sid: newOrgSid,
    nm: organizationName,
    is_del: false,
    cre_by_sid: clerkUserId,
    cre_on_dt: creUpdDt,
    upd_by_sid: clerkUserId,
    upd_on_dt: creUpdDt,
  };

  return newOrg;
};

const postOrganization = async (organizationData: Organization) => {
  const url = `${baseUrl}/organization`;
  const r = await apiCall(url, organizationData, 'POST');
  return r;
};

const createOrganization = async (
  clerkUserId: string,
  organizationName: string,
): Promise<any> => {
  const od = buildOrganization(organizationName, clerkUserId);
  const r = await postOrganization(od);
  return od.sid;
};

const confirmOrganization = async (
  organizationSid: string,
): Promise<any> => {
  const url = `${baseUrl}/organization/${organizationSid}`;
  const r = await apiCall(url, null, 'GET');

  if (r !== null && r !== undefined) {
    if (
      r[0].sid !== ''
            && r[0].sid !== undefined
            && r[0].sid !== null
    ) {
      return true;
    }
    // Handle the error
    return false;
  }
  // Handle the error
  return false;
};

function SignUpConfirmation() {
  const router = useRouter();

  const {
    firstName,
    lastName,
    userName,
    password,
    organizationName,
  } = useContext(MaelstromContext);

  const handleClick = async () => {
    const clerkUserId = createUser(
      firstName,
      lastName,
      userName,
      password,
    );
    const sid = await createOrganization(
      clerkUserId,
      organizationName,
    );

    const r = await confirmOrganization(sid);

    if (!r) {
      // Handle the error
      console.error('Error.');
    }

    if (
      firstName !== ''
            && lastName !== ''
            && userName !== ''
            && organizationName !== ''
            && password !== ''
            && firstName !== undefined
            && lastName !== undefined
            && userName !== undefined
            && organizationName !== undefined
            && password !== undefined
            && firstName !== null
            && lastName !== null
            && userName !== null
            && organizationName !== null
            && password !== null
    ) {
      router.push('/ui/signup/success');
    } else {
      router.push('/ui/signup/failure');
    }
  };

  return (
    <div className="signup-confirmation">
      <div className="row">
        <div className="col welcome">
          <h1>Confirmation</h1>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          You're creating an account for
          {' '}
          {firstName}
          {' '}
          {lastName}
          {' '}
          in the
          {' '}
          {organizationName}
          {' '}
          organization.
          You're user name will be
          {userName}
          .
        </div>
      </div>
      <div className="row">
        <div className="col signup-buttons">
          <MPButton
            block={false}
            click={handleClick}
            caption="Create"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpConfirmation;
