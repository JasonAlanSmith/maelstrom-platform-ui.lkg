'use client';

import React, { FC } from 'react';

import { SignIn } from '@clerk/nextjs';

const SignUpSuccess: FC = () => (
  <div>
    <h1>Success</h1>
    <h3>Login to continue to the Maelstrom Platform.</h3>
    <SignIn />
  </div>
);

export default SignUpSuccess;
