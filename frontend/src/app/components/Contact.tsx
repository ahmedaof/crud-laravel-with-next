import React from "react";
import { ContactModel } from "../types";
import Link from "next/link";
export default function Contact(params: ContactModel) {
  return (
    <tr>
      <td className="w-10 border border-slate-300 text-center">{params.id}</td>
      <td className="border border-slate-300">{params.first_name}</td>
      <td className="border border-slate-300">{params.last_name}</td>
      <td className="border border-slate-300">{params.email}</td>
      <td className="border border-slate-300">{params.phone}</td>
      <td className="border border-slate-300 text-center">
        {params.created_at}
      </td>
      <td className="w-52 border border-slate-300">
        <button
          type="button"
          onClick={() => params.deleteContact(params.id)}
          className="bg-red-500 p-2 inline-block text-white text-sm"
        >
          Delete
        </button>
        <Link
          href={`/contact/edit/${params.id}`}
          className="bg-yellow-500 p-2 inline-block ml-3 text-white text-sm"
        >
          Edit
        </Link>
        <Link
          href={`/contact/read/${params.id}`}
          className="bg-yellow-500 p-2 inline-block ml-3 text-white text-sm"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
