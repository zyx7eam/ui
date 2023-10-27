import React from 'react';

import { Button, Text } from 'ui';

const TypographyPage = () => {
  return (
    <div>
      <Button variant='flat'>sdsd</Button>
      <Text as='h1' disabled>
        H1
      </Text>
      <Text as='h2' italic>
        H2
      </Text>
      <Text as='h3' del>
        H3
      </Text>
      <Text as='h4'>H4</Text>
      <Text as='h5'>H5</Text>
      <Text as='h6'>H6</Text>
      <Text as='p'>This is an paragraph</Text>
    </div>
  );
};

export default TypographyPage;
