import React, { FC } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Dashboard: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap-reverse;
        height: 80vh;
        padding: 20px;
      `}
    >
      <div
        css={css`
          width: 30%;
        `}
      >
        <h3>Sidebar</h3>
      </div>
      <div
        css={css`
          width: 70%;
        `}
      >
        <h3>Data</h3>
      </div>
    </div>
  );
};

export default Dashboard;
