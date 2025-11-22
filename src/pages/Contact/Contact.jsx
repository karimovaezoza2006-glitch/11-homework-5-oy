import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Link import qilindi

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setContacts(data.users));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Contact List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <Link
            to={`/contact/${contact.id}`}  // Bu yerda Link bilan yo‘l ko‘rsatiladi
            key={contact.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={contact.image}
              alt={`${contact.firstName} ${contact.lastName}`}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">
              {contact.firstName} {contact.lastName}
            </h3>
            <p className="text-gray-600 mt-1">Email: {contact.email}</p>
            <p className="text-gray-600">Phone: {contact.phone}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
