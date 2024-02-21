'use client';

import React, {
  FC,
  useContext,
} from 'react';

import { useRouter } from 'next/navigation';

import { MaelstromContext } from '../../utils/context';
import { MPButton } from '../ui/mpbutton';
import { MPTextBox } from '../ui/mptextbox';

interface Organization {
  sid: string
  nm: string
  is_del: boolean
  cre_by_sid: string
  cre_on_dt: string
  upd_by_sid: string
  upd_on_dt: string
}

const SignUpOrganization: FC = () => {
  const { organizationName, updateOrganizationName } = useContext(MaelstromContext);
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    if (organizationName !== '') {
      router.push('/ui/signup/confirmation');
    } else {
      alert('Please provide an organization name.');
    }
  };

  return (
    <div className="signup-organization">
      <div className="row">
        <div className="col welcome">
          <h1>
            Congratulations! You have successfully created an account on the
            Maelstrom Platform.
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          Next, you need to create an organization.
        </div>
      </div>
      <div className="row">
        <div className="col signup-form">
          <form onSubmit={handleClick}>
            <div className="form-group">
              <label htmlFor="org-name">Organization Name</label>
              <MPTextBox
                id="org-name"
                change={(e) => updateOrganizationName(e?.value?.toString() ?? '')}
                value={organizationName}
                readOnly={false}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col signup-buttons">
          <MPButton
            css="signup-button-width"
            caption="Next"
            type="submit"
            click={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpOrganization;
