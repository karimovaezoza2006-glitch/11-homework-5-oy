import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServicesDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="text-center mt-10 text-xl">Loading...</h2>;

  if (!user)
    return (
      <h2 className="text-center mt-10 text-xl text-red-600">
        User not found!
      </h2>
    );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        {user.firstName} {user.lastName}
      </h1>
      <p className="mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="mb-2"><strong>Phone:</strong> {user.phone || "N/A"}</p>
      <p className="mb-2"><strong>Age:</strong> {user.age}</p>
      <p className="mb-2"><strong>Gender:</strong> {user.gender}</p>
      <p className="mb-2"><strong>Username:</strong> {user.username}</p>
      <p className="mb-2">
        <strong>Address:</strong> {user.address.address}, {user.address.city},{" "}
        {user.address.state}, {user.address.postalCode}
      </p>
      <p className="mb-2"><strong>Company:</strong> {user.company.name}</p>
      <p className="mb-2"><strong>Department:</strong> {user.company.department}</p>
      <p className="mb-2"><strong>Title:</strong> {user.company.title}</p>
    </div>
  );
}
