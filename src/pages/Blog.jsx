import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-2 gap-4">
        {posts.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-md">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p>{item.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
