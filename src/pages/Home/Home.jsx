import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
const [products, setProducts] = useState([]);


useEffect(() => {
fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => setProducts(data.products));
}, []);


return (
<div>
<h1 className="text-3xl font-bold mb-4">Products</h1>
<div className="grid grid-cols-4 gap-4">
{products.map((item) => (
<Link key={item.id} to={`/detail/${item.id}`} className="border p-3 rounded-md shadow-md">
<img src={item.thumbnail} className="w-full h-40 object-cover rounded" />
<h3 className="font-semibold mt-2">{item.title}</h3>
</Link>
))}
</div>
</div>
);
}