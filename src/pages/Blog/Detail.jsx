import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <h2 className="text-xl">Loading...</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded mb-6 shadow"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg leading-relaxed mb-4">{post.description}</p>
      <p className="text-xl font-semibold">Price: ${post.price}</p>
      <p className="text-sm text-gray-600">Category: {post.category}</p>
    </div>
  );
}
