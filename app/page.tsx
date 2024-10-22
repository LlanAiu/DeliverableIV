import Link from 'next/link';
import { Display } from './[breed]/breedDisplay';


export default function Home() {
  const breeds = [
    {displayName: 'German Shepherds', urlName: 'german-shepherd', src: '/german-shepherd.jpg'},
    {displayName: 'Bulldogs', urlName: 'bulldog', src: '/bulldog.jpg'},
    {displayName: 'Beagles', urlName: 'beagle', src: '/beagle.jpg'},
    {displayName: 'Siberian Huskies', urlName: 'siberian-husky', src: '/siberian-husky.jpg'}
  ];
  
  return (
    <div>
      <h1 className='text-center text-2xl mt-12 mb-4'><b>Adopt a Dog Today!!</b></h1>
      <div className='text-center mt-5 mb-2'>
        <h2 className='text-xl'>Learn more about...</h2>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 w-max m-auto content-center'>
        {breeds.map((breed) => (
          <Link href={`./${breed.urlName}`} key={breed.displayName}>
            <Display breed={breed.displayName} src={breed.src}/>
          </Link>
        ))}
      </div>
    </div>
  );
}
