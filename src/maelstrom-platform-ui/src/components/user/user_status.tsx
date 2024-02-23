'use client';

import React, {
  FC,
  useContext,
} from 'react';

import { useUser } from '@clerk/nextjs';

import { MaelstromContext } from '../../utils/context';

const UserInfo: FC = () => {
  const { organizationName } = useContext(MaelstromContext);

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return (
      <p>
        User
        {' '}
        {user.username}
        {' '}
        from
        {organizationName}
        {' '}
        is signed in.
      </p>
    );
  }

  return <div>Not signed in</div>;
};

export default UserInfo;
