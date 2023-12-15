import Accordion from '@zyxui/accordion';
import Alert from '@zyxui/alert';
import Button from '@zyxui/button';
import Text from '@zyxui/text';

export default function Home() {
  return (
    <main className='mx-10'>
      <div className='my-10'>
        <Text as={'h1'} className='mb-5'>
          Buttons - Solid
        </Text>
        <Text as={'h2'} className='my-2'>
          Colors
        </Text>
        <div className='flex gap-2'>
          <Button>default</Button>
          <Button color={'error'}>error</Button>
          <Button color={'success'}>success</Button>
          <Button color={'warning'}>warning</Button>
        </div>
        <Text as={'h2'} className='my-2'>
          Variants - bordered
        </Text>
        <div className='flex gap-2'>
          <Button variant={'bordered'}>default</Button>
          <Button color={'error'} variant={'bordered'}>
            error
          </Button>
          <Button color={'success'} variant={'bordered'}>
            success
          </Button>
          <Button color={'warning'} variant={'bordered'}>
            warning
          </Button>
        </div>
        <Text as={'h2'} className='my-2'>
          Variants - shadow
        </Text>
        <div className='flex gap-2'>
          <Button variant={'shadow'}>default</Button>
          <Button color={'error'} variant={'shadow'}>
            error
          </Button>
          <Button color={'success'} variant={'shadow'}>
            success
          </Button>
          <Button color={'warning'} variant={'shadow'}>
            warning
          </Button>
        </div>
        <Text as={'h2'} className='my-2'>
          Variants - flat
        </Text>
        <div className='flex gap-2'>
          <Button variant={'flat'}>default</Button>
          <Button color={'error'} variant={'flat'}>
            error
          </Button>
          <Button color={'success'} variant={'flat'}>
            success
          </Button>
          <Button color={'warning'} variant={'flat'}>
            warning
          </Button>
        </div>
        <Text as={'h2'} className='my-2'>
          Variants - ghost
        </Text>
        <div className='flex gap-2'>
          <Button variant={'ghost'}>default</Button>
          <Button color={'error'} variant={'ghost'}>
            error
          </Button>
          <Button color={'success'} variant={'ghost'}>
            success
          </Button>
          <Button color={'warning'} variant={'ghost'}>
            warning
          </Button>
        </div>
        <Text as={'h2'} className='my-2'>
          Variants - light
        </Text>
        <div className='flex gap-2'>
          <Button variant={'light'}>default</Button>
          <Button color={'error'} variant={'light'}>
            error
          </Button>
          <Button color={'success'} variant={'light'}>
            success
          </Button>
          <Button color={'warning'} variant={'light'}>
            warning
          </Button>
        </div>
      </div>

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
