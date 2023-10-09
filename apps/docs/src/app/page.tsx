import { CirclesShape } from '../components/sahpes';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <CirclesShape
        className='absolute left-0 top-0 w-full text-red-400'
        width={'90%'}
        height={'90%'}
      />
    </main>
  );
}
