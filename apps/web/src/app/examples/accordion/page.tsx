import React from 'react';
import { Collapse } from 'ui';
const AccordionPage = () => {
  return (
    <div>
      <h1>AccordionPage</h1>
      {/* <div>
        <Accordion
          items={[
            {
              key: 1,
              header: 'Hello Header',
              children: <p>This is an accordion</p>,
            },
            {
              key: 2,
              header: 'Hello Header 2',
              children: <p>This is an accordion 2</p>,
            },
          ]}
        />
      </div> */}
      <div>
        <Collapse
          items={[
            {
              id: 1,
              title: 'Hello Header',
              content: <p>This is an accordion</p>,
            },
            {
              id: 2,
              title: 'Hello Header 2',
              content: <p>This is an accordion 2</p>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AccordionPage;
