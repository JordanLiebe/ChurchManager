import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Navigation, { Link } from '../Base/Navigation';
import PageTitle from '../Base/PageTitle';

import { useParams } from 'react-router-dom';

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

const MembershipPage: FC<RouteComponentProps> = ({ history }) => {
  let { church } = useParams();

  useEffect(() => {}, [church]);

  return (
    <div
      css={css`
        height: 80vh;
      `}
    >
      <Navigation links={Links} />
      <PageTitle title="Membership" />
      {church}
    </div>
  );
};

export default MembershipPage;
