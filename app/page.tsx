import Link from 'next/link';
import { Display } from './dogs/[breed]/breedDisplay';


export default async function Home() {

  const breeds = [
    {displayName: 'Sheepdogs', urlName: 'sheepdog', src: '/german-shepherd.jpg'},
    {displayName: 'Bulldogs', urlName: 'bulldog', src: '/bulldog.jpg'},
    {displayName: 'Beagles', urlName: 'beagle', src: '/beagle.jpg'},
    {displayName: 'Huskies', urlName: 'husky', src: '/siberian-husky.jpg'}
  ];

  const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const breedList = await response.json();

    console.log(Object.keys(breedList.message));
  
  return (
    <div>
      <h1 className='text-center text-2xl mt-12 mb-4'><b>Adopt a Dog Today!!</b></h1>
      <div className='text-center mt-5 mb-2'>
        <h2 className='text-xl'>Learn more about...</h2>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 w-max m-auto content-center'>
        {breeds.map((breed) => (
          <Link href={`./dogs/${breed.urlName}`} key={breed.displayName}>
            <Display breed={breed.displayName} src={breed.src}/>
          </Link>
        ))}
      </div>
    </div>
  );
}
