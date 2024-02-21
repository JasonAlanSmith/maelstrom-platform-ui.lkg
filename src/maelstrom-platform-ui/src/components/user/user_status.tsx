'use client';

import React, { FC, useContext } from 'react';

import { useUser } from '@clerk/nextjs';
import { MaelstromContext } from '@/app/utils/context';

const UserInfo: FC = () => {
  const { value, orgNm } = useContext(MaelstromContext);

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
        {orgNm}
        {' '}
        is signed in.
      </p>
    );
  }

  return <div>Not signed in</div>;
};

export default UserInfo;
