import { useEffect, useState } from "react";

const Github = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/suegathh")
      .then(response => response.json())
      .then(json => {
        setUser(json);
        setLoading(false);
      })
      .then(null, error => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      {user && (
        <div className="mb-6 border-b pb-4">
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
          <h1 className="text-xl font-semibold">Login: {user.name}</h1>
          <p>ID: {user.id}</p>
          <p>Node ID: {user.node_id}</p>
          <p>Avatar URL: <a href={user.avatar_url} target="_blank" rel="noopener noreferrer">{user.avatar_url}</a></p>
          <p>Gravatar ID: {user.gravatar_id}</p>
          <p>Location: {user.location}</p>
        
        </div>
      )}
    </div>
  );
};

export default Github;
