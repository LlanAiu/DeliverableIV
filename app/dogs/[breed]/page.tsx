import Image from "next/image.js";



export async function generateStaticParams(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const breedList = await response.json();

    return Object.keys(breedList.message).map((breedName: string) => ({
        breed: breedName
    }));
}

export default async function Page({params} : {params: {breed: string}}){

    const { breed } = await params;

    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const breedImage = await response.json();

    return (
        <div>
            <p>This will be a page about {breed}s</p>
            <Image 
                src={breedImage.message} 
                alt={breed}
                width={500}
                height={500}
             />
        </div>
    );
}