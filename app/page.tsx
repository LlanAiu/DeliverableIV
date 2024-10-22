import { Display } from './[breed]/breedDisplay';


export default function Home() {
  const breeds = [
    {displayName: 'German Shepard', urlName: 'german-shepard', src: '/german-shepard.jpg'},
    {displayName: 'Bulldog', urlName: 'bulldog', src: '/bulldog.jpg'},
    {displayName: 'Beagle', urlName: 'beagle', src: '/beagle.jpg'},
    {displayName: 'Siberian Husky', urlName: 'siberian-husky', src: '/siberian-husky.jpg'}
  ];
  
  return (
    <div>
      <h1>Dog adoption or something</h1>
      <div>
        <h2>Learn more about...</h2>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 w-max'>
        {breeds.map((breed) => 
          (<Display key={breed.displayName} breed={breed.displayName} src={breed.src}/>)
        )}
      </div>
    </div>
  );
}
