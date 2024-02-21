'use client';

import React, {
  FC,
  ReactElement,
  useContext,
} from 'react';

import { useRouter } from 'next/navigation';

import { useUser } from '@clerk/nextjs';

import { DashboardGraph } from '../components/dashboard/dashboard_graph';
import { ApplicationHeader } from '../components/shell/application_header';
import { ApplicationMenu } from '../components/shell/application_menu';
import choices from '../utils/application_menu_choices';
import { MaelstromContext } from '../utils/context';

const Home: FC = (): ReactElement => {
  const router = useRouter();
  const { organizationName } = useContext(MaelstromContext);
  const { isSignedIn, user, isLoaded } = useUser();

  const isReady = () => isLoaded && isSignedIn && user.id;

  if (!isReady()) {
    router.push('/');
  }

  return (
    <div>
      <ApplicationHeader />
      <div className="row">
        <div className="col-lg-2">
          <DashboardGraph title="Customers">
            <h3>Graph 1</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Locations">
            <h3>Graph 2</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Products">
            <h3>Graph 3</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Issues">
            <h3>Graph 4</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 5">
            <h3>Graph 5</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 6">
            <h3>Graph 6</h3>
          </DashboardGraph>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2">
          <DashboardGraph title="Graph 7">
            <h3>Graph 7</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 8">
            <h3>Graph 8</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-4">
          <DashboardGraph title="Splash">
            <h3>Splash</h3>
          </DashboardGraph>
        </div>

        <div className="col-lg-2">
          <DashboardGraph title="Graph 9">
            <h3>Graph 9</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 10">
            <h3>Graph 10</h3>
          </DashboardGraph>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2">
          <DashboardGraph title="Graph 11">
            <h3>Graph 11</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 12">
            <h3>Graph 12</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-4">
          <DashboardGraph title="Message of the Day">
            <h3>Message of the Day</h3>
          </DashboardGraph>
        </div>

        <div className="col-lg-2">
          <DashboardGraph title="Graph 13">
            <h3>Graph 13</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 14">
            <h3>Graph 14</h3>
          </DashboardGraph>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2">
          <DashboardGraph title="Graph 15">
            <h3>Graph 15</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 16">
            <h3>Graph 16</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12" />
          </div>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 17">
            <h3>Graph 17</h3>
          </DashboardGraph>
        </div>
        <div className="col-lg-2">
          <DashboardGraph title="Graph 18">
            <h3>Graph 18</h3>
          </DashboardGraph>
        </div>
      </div>
      <ApplicationMenu choices={choices} />
    </div>
  );
};

export default Home;
