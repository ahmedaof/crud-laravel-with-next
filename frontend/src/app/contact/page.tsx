"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../libs";
import Contact from "../components/Contact";
import { ContactModel } from "../types";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Contacts() {
  const [contacts, setContacts] = useState<any>([]);
  const { data, error, isLoading } = useSWR<any>(`/api/contacts`, fetcher);

  useEffect(() => {
    if (data && data.result) {
      setContacts(data.result.data);
    }
  }, [data, isLoading]);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  let delete_Contact: ContactModel["deleteContact"] = async (id: number) => {
    const res = await fetch(`/api/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const content = await res.json();
    if (content.success) {
      toast.success("Contact deleted successfully");
      setContacts(
        contacts.filter((contact: ContactModel) => {
          return contact.id !== id;
        })
      );
    } else {
      toast.error("Contact not deleted");
    }
  };
  return (
    <div className="w-full max-w-7xl m-auto">
      <Link
        href={`/contact/create`}
        className="bg-green-500 p-2 inline-block text-white"
      >
        Create
      </Link>
      <table className="w-full border-collapse border border-slate-400">
        <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
          List Contacts - Counter :
          <span className="text-red-500 font-bold">{contacts?.length}</span>
        </caption>

        <thead>
          <tr className="text-center">
            <th className="border border-slate-300">ID</th>
            <th className="border border-slate-300">first Name</th>
            <th className="border border-slate-300">Last Name</th>
            <th className="border border-slate-300">email</th>
            <th className="border border-slate-300">phone</th>
            <th className="border border-slate-300">Created at</th>
            <th className="border border-slate-300">Modify</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((item: ContactModel) => (
              <Contact key={item.id} {...item} deleteContact={delete_Contact} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
