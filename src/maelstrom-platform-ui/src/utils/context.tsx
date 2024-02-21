'use client';

import { createContext, useState } from 'react';

export const MaelstromContext = createContext({
  firstName: '',
  updateFirstName: (newFirstName: string) => {},
  lastName: '',
  updateLastName: (newLastName: string) => {},
  userName: '',
  updateUserName: (newUserName: string) => {},
  password: '',
  updatePassword: (newPassword: string) => {},
  organizationName: '',
  updateOrganizationName: (newOrganizationName: string) => {},
});

export function MaelstromContextProvider({ children }: any) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [organizationName, setOrganizationName] = useState<string>('');

  return (
    <MaelstromContext.Provider
      value={{
        firstName,
        updateFirstName: (newFirstName: string) => {
          setFirstName(newFirstName);
        },
        lastName,
        updateLastName: (newLastName: string) => {
          setLastName(newLastName);
        },
        userName,
        updateUserName: (newUserName: string) => {
          setUserName(newUserName);
        },
        password,
        updatePassword: (newPassword: string) => {
          setPassword(newPassword);
        },
        organizationName,
        updateOrganizationName: (
          newOrganizationName: string,
        ) => {
          setOrganizationName(newOrganizationName);
        },
      }}
    >
      {children}
    </MaelstromContext.Provider>
  );
}
