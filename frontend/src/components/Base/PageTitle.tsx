import React, { FC } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface TitleProps {
  title: string;
}

const PageTitle: FC<TitleProps> = ({ title }) => {
  return (
    <div
      css={css`
        text-align: center;
        font-size: 22px;
        padding: 10px;
        margin: 10px;
      `}
    >
      {title}
    </div>
  );
};

export default PageTitle;
