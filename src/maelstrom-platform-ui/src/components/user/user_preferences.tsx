'use client';

import React, { FC } from 'react';

import Link from 'next/link';

const UserPreferences: FC = () => (
  <Link href="/services/administration" className="navbar-brand">
    Preferences
  </Link>
);

export default UserPreferences;
