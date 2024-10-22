import Image from 'next/image';

export function Display({breed, src} : {breed: string, src: string}){

    return (
        <div className='flex flex-col justify-center h-max w-max border rounded-md m-5'>
            <div className='flex-auto h-max m-auto'>
                <Image
                    src={src}
                    width={250}
                    height={250}
                    alt={`Picture of a ${breed}`}
                    className='rounded-md'
                />
            </div>
            <p className='flex-initial p-1 text-center'>{breed}</p>
        </div>
    );
}