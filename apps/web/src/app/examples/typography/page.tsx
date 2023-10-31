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
      <Text as='p' lineClamp={6}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti qui
        corporis reiciendis excepturi perspiciatis enim eaque voluptas, magni
        rerum itaque iste neque voluptatibus accusamus alias saepe assumenda
        labore quas molestias. Est recusandae quaerat ipsa commodi quae
        assumenda ab{' '}
        <Text as='mark' color='error'>
          facilis
        </Text>{' '}
        <Text as='mark'>fuga</Text> illo{' '}
        <Text as='mark' color='success'>
          maxime
        </Text>{' '}
        fugiat{' '}
        <Text as='mark' color='warning'>
          error
        </Text>{' '}
        deserunt quisquam dignissimos{' '}
        <Text as='span' color='error'>
          quis
        </Text>
        , laboriosam neque sit molestias nihil porro distinctio repudiandae
        nostrum. Ipsum, dolor ratione! Ad, aspernatur? Animi laboriosam
        obcaecati perferendis numquam esse commodi deleniti, explicabo officiis
        iste vel optio dolores laudantium. Expedita ea quae possimus nihil
        incidunt alias vitae pariatur fugiat? Omnis, in ipsam. Sint non
        consequuntur inventore eos consectetur. Quae ipsa molestiae, similique,
        earum nobis tempora vel doloremque blanditiis doloribus voluptatem
        cupiditate dignissimos in officia sapiente soluta accusantium! Ratione
        iure nemo sunt veritatis? Obcaecati, quas dolore! Quis, laborum. Soluta
        distinctio, eius quas saepe est tenetur omnis vel earum blanditiis a
        ducimus sint ab non dolore illo reiciendis eligendi
      </Text>
      <div>
        Code Text Components
        <div>
          <Text as='code'>Code with default color</Text>
        </div>
        <div>
          <Text as='code' color='success'>
            Code with success color
          </Text>
        </div>
        <div>
          <Text as='code' color='error'>
            Code with error color
          </Text>
        </div>
        <div>
          <Text as='code' color='warning'>
            Code with warning color
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TypographyPage;
