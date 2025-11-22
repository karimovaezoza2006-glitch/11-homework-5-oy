import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts with Images</h1>
      <div className="grid grid-cols-2 gap-6">
        {posts.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.id}`}
            className="border p-4 rounded shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p>{item.description.substring(0, 50)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
