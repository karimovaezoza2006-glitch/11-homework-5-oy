import { useEffect, useState } from "react";


export default function About() {
const [recipes, setRecipes] = useState([]);


useEffect(() => {
fetch("https://dummyjson.com/recipes")
.then((res) => res.json())
.then((data) => setRecipes(data.recipes));
}, []);


return (
<div>
<h1 className="text-3xl font-bold mb-4">Recipes</h1>
<ul className="grid grid-cols-3 gap-4">
{recipes.map((item) => (
<li key={item.id} className="border p-3 rounded shadow">
<h3 className="font-semibold">{item.name}</h3>
</li>
))}
</ul>
</div>
);
}