"use client";
import { fetcher } from "@/app/libs";
import Link from "next/link";
import useSWR from "swr";

export default function Detail({ params }: { params: { id: number } }) {
  const {
    data: contact,
    isLoading,
    error,
  } = useSWR(`/api/contacts/${params.id}`, fetcher);

  if (isLoading)
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  if (!contact) return null;
  console.log("contact", contact);

  return (
    <div className="w-full">
      <Link
        className="font-bold text-yellow-500 py-2 block underline text-2xl"
        href={"/"}
      >
        all Contacts
      </Link>
      <h2 className="text-center font-bold text-3xl py-3">
        Name: {contact.data.first_name} {contact.data.last_name}
      </h2>
      <h3 className="text-center font-bold text-2xl py-3">
        Email : {contact.data.email}
      </h3>
      <h3 className="text-center font-bold text-2xl py-3">
        Phone :{contact.data.phone}
      </h3>
    </div>
  );
}
