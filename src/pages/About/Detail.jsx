import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function AboutDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals ? data.meals[0] : null));
  }, [id]);

  if (!meal) return <h2 className="text-center mt-10 text-xl">Loading...</h2>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <Link to="/about" className="text-blue-600 hover:underline mb-6 inline-block">
        &larr; Back to Recipes
      </Link>
      <h1 className="text-4xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-h-96 object-cover rounded mb-6"
      />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions:</h2>
      <p className="whitespace-pre-line">{meal.strInstructions}</p>
      {meal.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Video Recipe:</h2>
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
}
