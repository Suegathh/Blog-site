import { useEffect, useState } from "react"

const DataFetch = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) =>{
            setData(json)
            setLoading(false)
        });
    }, []);
    if (loading) return <p>Loading...</p>
    
    return(
        <>
        <div>
            <h1 className="text-2xl font-bold mb-4">All Posts</h1>
            <div className="grid grid-cols-2 gap-6">
            {data.map((post) => (
                <div key={post.id} className="mb-6 border-b pb-4">
               <h1 className="text-xl font-semibold">Title: {post.title}</h1>
               <p> Body: {post.body}</p>
               </div>
            ))}
        </div>
        </div>
        </>
    )
}
export default DataFetch;