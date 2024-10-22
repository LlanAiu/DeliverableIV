

export default async function Page({params} : {params: {breed: string}}){

    const breed = (await params).breed;

    return <div>This will be a page about {breed}s</div>;
}