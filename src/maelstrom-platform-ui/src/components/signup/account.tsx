'use client';

import React, {
  useContext,
  useEffect,
} from 'react';

import { useRouter } from 'next/navigation';

import {
  FormValidator,
  FormValidatorModel,
} from '@syncfusion/ej2-react-inputs';

import { MaelstromContext } from '../../utils/context';
import { MPButton } from '../ui/mpbutton';
import { MPTextBox } from '../ui/mptextbox';

let formObject: FormValidator;

function SignUpAccount() {

  const router = useRouter();
  const {
    firstName,
    lastName,
    userName,
    password,
    updateFirstName,
    updateLastName,
    updateUserName,
    updatePassword,
  } = useContext(MaelstromContext);

  useEffect(() => {


    const options: FormValidatorModel = {
            rules: {
                firstName: {
                    required: [true, '* Please enter your first name'],
                },
                lastName: {
                    required: [true, '* Please enter your last name'],
                },
                userName: {
                    required: [true, '* Please enter your user name'],
                },
                password: {
                    required: [true, '* Please enter your password'],
                },
            },
    };

    formObject = new FormValidator('#signup-account-form', options);
    formObject.validClass = 'valid-form-element';
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('formObject: ', formObject);
    formObject.validate();
    if (formObject.validate()) {
      formObject.element.reset();
    }

    if (firstName !== '' && lastName !== '' && userName !== '' && password !== '') {
      router.push('/ui/signup/organization');
    }
  };

  const handleBlur = (e: any) => {
    const ele = e.currentTarget;
    const isValid = ele.parentElement.classList.contains('e-valid-input');

    if (isValid) {
      ele.parentElement.classList.add('e-success');
      ele.parentElement.classList.remove('e-error');
    } else {
      ele.parentElement.classList.remove('e-success');
      ele.parentElement.classList.add('e-error');
    }
  };

  return (
    <div className="signup-account">
      <div className="row">
        <div className="col welcome">
          <h1>Sign Up</h1>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          <p>Please provide your name. Then select a user name and password.</p>
        </div>
      </div>
      <div className="row">
        <form id='signup-account-form' onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="first-name">First Name</label>
              <MPTextBox
                name="firstName"
                id="first-name"
                value={firstName}
                change={(e: any) => updateFirstName(e.value.toString())}
                readOnly={false}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="last-name">Last Name</label>
              <MPTextBox
                name="lastName"
                id="last-name"
                value={lastName}
                change={(e: any) => updateLastName(e.value.toString())}
                readOnly={false}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="user-name">User Name</label>
              <MPTextBox
                name="userName"
                id="user-name"
                value={userName}
                change={(e: any) => updateUserName(e.value.toString())}
                readOnly={false}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="password">Password</label>
              <MPTextBox
                name="password"
                id="password"
                value={password}
                change={(e: any) => updatePassword(e.value.toString())}
                readOnly={false}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col signup-buttons">
          <MPButton
            css="signup-button-width"
            type="submit"
            caption="Next"
            click={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpAccount;
