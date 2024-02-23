'use client';

import React, {
  FC,
  ReactElement,
  useContext,
} from 'react';

import Link from 'next/link';

import { MaelstromContext } from '../../utils/context';
import UserPreferences from '../user/user_preferences';
import UserAccount from '../user/user_profile';
import UserInfo from '../user/user_status';

export const ApplicationHeader: FC = (): ReactElement => {
  const { organizationName } = useContext(MaelstromContext);

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
