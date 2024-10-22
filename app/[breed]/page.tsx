

export default function Page({params} : {params: {breed: string}}){
    return <div>This will be a page about {params.breed}s</div>;
}