'use client';

import React, { FC, ReactElement, useContext } from 'react';

import Link from 'next/link';

import UserInfo from '@/app/components/user_status';
import { MaelstromContext } from '@/app/utils/context';

import UserPreferences from './user_preferences';
import UserAccount from './user_profile';

export const ApplicationHeader: FC = (): ReactElement => {
  const { value, orgNm } = useContext(MaelstromContext);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <Link href="/" className="navbar-brand">
          Maelstrom Platform
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item m-2">
            <UserInfo />
          </li>
          <li className="nav-item m-2">
            <UserPreferences />
          </li>
          <li className="nav-item m-2">
            <UserAccount />
          </li>
        </ul>
      </nav>
    </div>
  );
};
