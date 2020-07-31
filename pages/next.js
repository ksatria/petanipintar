import Link from 'next/link';

const Next = () => (
    <>
        <h1 className="title">The Next Page</h1>
        <p className="lead">This is a next page of Petani Pintar</p>
        <p className="small"><Link href="/"><a>Go back to the Home</a></Link></p>
    </>
)

export default Next;