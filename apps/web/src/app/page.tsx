import Accordion from '@zyxui/accordion';
import Alert from '@zyxui/alert';
import Button from '@zyxui/button';
import Text from '@zyxui/text';

export default function Home() {
  return (
    <main>
      <Button color={'warning'}>Tests</Button>

      <Alert
        title={'Some Title Here'}
        description='Some Description Here'
        variant={'bordered'}
        color='success'
      />

      <br />

      <Text as={'h1'} color='error'>
        HEADING 1
      </Text>
      <Text as={'p'}>Paragraph</Text>
      <Text as={'code'} color='success'>
        code
      </Text>

      <br />

      <Accordion
        defaultValues={['2']}
        variant='bordered'
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
          {
            id: 3,
            title: 'Hello Header 3',
            content: <p>This is an accordion 3</p>,
          },
        ]}
      />
    </main>
  );
}
