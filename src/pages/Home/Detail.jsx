import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Detail() {
const { id } = useParams();
const [item, setItem] = useState(null);


useEffect(() => {
fetch(`https://dummyjson.com/products/${id}`)
.then((res) => res.json())
.then((data) => setItem(data));
}, [id]);


if (!item) return <h1>Loading...</h1>;


return (
<div className="flex gap-5">
<img src={item.thumbnail} className="w-80 h-80 object-cover rounded" />
<div>
<h1 className="text-4xl font-bold">{item.title}</h1>
<p className="mt-3 text-lg">{item.description}</p>
<p className="text-xl mt-4 font-semibold">Price: $ {item.price}</p>
</div>
</div>
);
}