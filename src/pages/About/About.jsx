import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recipes with Images</h1>
      <div className="grid grid-cols-3 gap-6">
        {meals.map((meal) => (
          <Link
            key={meal.idMeal}
            to={`/about/${meal.idMeal}`}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
              <p className="mt-2 text-gray-600">
                {meal.strArea} | {meal.strCategory}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
