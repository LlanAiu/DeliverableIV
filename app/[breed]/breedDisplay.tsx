import Image from 'next/image';

export function Display({breed, src} : {breed: string, src: string}){

    return (
        <div className='flex flex-col justify-center h-56 w-max border m-5'>
            <div className='flex-auto h-max m-auto'>
                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt={`Picture of a ${breed}`}
                />
            </div>
            <p className='flex-initial h-15 text-center'>{breed}</p>
        </div>
    );
}