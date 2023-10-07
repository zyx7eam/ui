import { GithubIcon, MoveRightIcon } from 'lucide-react';
import { Button } from 'ui';

const colors = ['default', 'success', 'warning', 'error'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
const radiuses = [...sizes, 'circle', 'none'] as const;
const variants = [
  'solid',
  'bordered',
  'light',
  'ghost',
  'flat',
  'shadow',
] as const;

export default function Page() {
  return (
    <div className='mt-8 items-center space-y-4'>
      <div className='flex w-full justify-center text-3xl font-bold'>
        Button Component
      </div>
      <div className='flex w-full flex-col justify-center gap-5'>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Colors</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {colors.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button color={item}>Submit</Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='dark'>
          <div className='bg-secondary flex flex-col gap-2 p-4'>
            <h1 className='text-primary font-bold'>Colors Dark</h1>
            <div className='bg-primary my-2 h-[1px]' />
            <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
              {colors.map((item) => (
                <div
                  key={item}
                  className='flex flex-col items-center justify-center gap-1'
                >
                  <h2 className='text-primary text-sm font-medium'>{item}</h2>
                  <Button color={item}>Submit</Button>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Sizes</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {sizes.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button size={item}>Submit</Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Border Radius</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {radiuses.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button radius={item}>Submit</Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Variants & Default Color</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button variant={item}>Submit</Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Variants & Error Color</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button variant={item} color='error'>
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Variants & Success Color</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button variant={item} color='success'>
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>Variants & Warning Color</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button variant={item} color='warning'>
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>
            Button With Start Content with all variants
          </h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button
                  variant={item}
                  color='default'
                  startContent={<GithubIcon size={18} />}
                >
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>
            Button With End Content with all variants
          </h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button
                  variant={item}
                  color='default'
                  endContent={<MoveRightIcon size={18} />}
                >
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>With Loading States</h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {variants.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button variant={item} loading={true}>
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary dark flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>
            With Loading States & Colors
          </h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {colors.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button color={item} loading={true}>
                  Submit
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>
            Only Icon & Small Size & Circle Radius
          </h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {colors.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button color={item} size='sm' iconOnly radius='circle'>
                  <GithubIcon size={18} />
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>
            Only Icon & Medium Size & Circle Radius
          </h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {colors.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button color={item} size='md' iconOnly radius='circle'>
                  <GithubIcon size={18} />
                </Button>
              </div>
            ))}
          </ul>
        </div>
        <div className='bg-secondary flex flex-col gap-2 p-4'>
          <h1 className='text-primary font-bold'>
            Only Icon & Large Size & Circle Radius
          </h1>
          <div className='bg-primary my-2 h-[1px]' />
          <ul className='items-center space-y-1 md:inline-flex md:space-x-4 md:space-y-0'>
            {colors.map((item) => (
              <div
                key={item}
                className='flex flex-col items-center justify-center gap-1'
              >
                <h2 className='text-primary text-sm font-medium'>{item}</h2>
                <Button color={item} size='lg' iconOnly radius='circle'>
                  <GithubIcon size={18} />
                </Button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
