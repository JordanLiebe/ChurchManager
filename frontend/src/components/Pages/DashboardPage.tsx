import React, { FC, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import Navigation, { Link } from '../Base/Navigation';
import PageTitle from '../Base/PageTitle';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Links: Link[] = [
  {
    id: 1,
    text: 'Dashboard',
    link: './Dashboard',
  },
  {
    id: 2,
    text: 'Membership',
    link: './Membership',
  },
  {
    id: 3,
    text: 'Attendance',
    link: './Attendance',
  },
  {
    id: 4,
    text: 'Events',
    link: './Events',
  },
];

const DashboardPage: FC<RouteComponentProps> = ({ history }) => {
  return (
    <div
      css={css`
        height: 80vh;
      `}
    >
      <Navigation links={Links} />
      <PageTitle title="Dashboard" />
    </div>
  );
};

export default DashboardPage;
