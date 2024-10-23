

export default async function Page({params} : {params: {breed: string}}){

    const { breed } = params;

    return <div>This will be a page about {breed}s</div>;
}