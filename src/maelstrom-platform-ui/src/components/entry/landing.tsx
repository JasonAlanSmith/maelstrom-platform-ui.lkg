import React from 'react';

import { UserButton } from '@clerk/nextjs';

import { MPButton } from '../ui/mpbutton';

function Landing() {
  return (
    <div className="landing">
      <div className="row">
        <div className="col welcome">
          <h2>Welcome to the Maelstrom Platform.</h2>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          <h3>
            Please sign in or create an account to continue.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col signup-buttons">
          <MPButton
            css="signup-button-width"
            route=""
            caption="Sign In"
          />
        </div>
        <div className="col signup-buttons">
          <MPButton
            css="signup-button-width"
            route="/ui/signup/account"
            caption="Sign Up"
          />
        </div>
      </div>
      <UserButton />
    </div>
  );
}

export default Landing;
