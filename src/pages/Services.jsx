import { useEffect, useState } from "react";

export default function Services() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1
        className="text-4xl font-bold mb-8 text-indigo-700"
        data-aos="fade-down"
      >
        Our Services (Users API)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white border rounded-lg shadow-lg p-5 hover:shadow-2xl transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="font-semibold text-xl mb-2">
              {u.firstName} {u.lastName}
            </h3>
            <p className="text-gray-600 mb-1">Email: {u.email}</p>
            <p className="text-gray-600">
              Phone: {u.phone || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
