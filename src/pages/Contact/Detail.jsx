import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch(() => setContact(null));
  }, [id]);

  if (!contact) return <h2 className="text-xl text-center mt-10">Loading...</h2>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <img
        src={contact.image}
        alt={`${contact.firstName} ${contact.lastName}`}
        className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold text-center mb-4">
        {contact.firstName} {contact.lastName}
      </h1>

      <div className="space-y-2 text-gray-700">
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Age:</strong> {contact.age}</p>
        <p><strong>Gender:</strong> {contact.gender}</p>
        <p><strong>Username:</strong> {contact.username}</p>

        <p><strong>Address:</strong> {contact.address.address}, {contact.address.city}, {contact.address.state}, {contact.address.postalCode}</p>

        <p><strong>Company:</strong> {contact.company.name}</p>
        <p><strong>Department:</strong> {contact.company.department}</p>
        <p><strong>Title:</strong> {contact.company.title}</p>
      </div>
    </div>
  );
}
