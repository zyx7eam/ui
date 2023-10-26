import React from 'react';

import { Button, Typography, Title } from 'ui';

const TypographyPage = () => {
  return (
    <div>
      <Button variant='flat'>sdsd</Button>
      <Typography as='article'>Typography</Typography>
      <Title as='h1' disabled>
        H1
      </Title>
      <Title as='h2' italic>
        H2
      </Title>
      <Title as='h3' del>
        H3
      </Title>
      <Title as='h4'>H4</Title>
      <Title as='h5'>H5</Title>
      <Title as='h6'>H6</Title>
    </div>
  );
};

export default TypographyPage;
