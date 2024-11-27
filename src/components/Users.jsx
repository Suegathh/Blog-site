import { useEffect, useState } from "react"

const Users = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) =>{
            setUser(json)
            setLoading(false)
        });
    }, []);
    if (loading) return <p>Loading...</p>
    
    return(
        <>
        <div>
            <h1 className="text-2xl font-bold mb-4">All Posts</h1>
            <div className="grid grid-cols-2 gap-6">
            {user.map((user) => (
                <div key={user.id} className="mb-6 border-b pb-4">
               <h1 className="text-xl font-semibold">Name: {user.name}</h1>
               <p> Email: {user.email}</p>
               <p>Address:  {user.address.city}, {user.address.suite}, {user.address.street}, {user.address.zipcode}</p>
               <p>Geo: {user.address.geo.lat},{user.address.geo.lng}</p>
               </div>
            ))}
        </div>
        </div>
        </>
    )
}
export default Users;