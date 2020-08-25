import React, { FC, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const DashboardPage: FC<RouteComponentProps> = ({ history }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80vh;
      `}
    >
      <div>Sample Dashboard</div>
    </div>
  );
};

export default DashboardPage;
