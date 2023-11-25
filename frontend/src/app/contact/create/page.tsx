"use client";
import Api from "@/app/server/axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

export default function ContactCreate() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<any>({});

  const onSubmit: SubmitHandler<any> = async (data) => {
    const responce = await Api().post("/api/contacts", data);
    if (responce) {
      reset();
    }
  };

  return (
    <>
      <Link
        className="font-bold text-yellow-500 py-2 block underline text-2xl"
        href={"/"}
      >
        all Contacts
      </Link>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            first Name
          </label>
          <input
            type="text"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && <span>This field is required</span>}
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            last Name
          </label>
          <textarea
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            {...register("last_name", { required: true })}
          />
          {errors.last_name && <span>This field is required</span>}
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            email
          </label>
          <input
            type="email"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>This field is must be email</span>}
        </div>
        <div className="w-full py-2">
          <label htmlFor="" className="text-sm font-bold py-2 block">
            phone
          </label>
          <input
            type="number"
            className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
            {...register("phone", { required: true })}
          />
        </div>
        {errors.phone && <span>This field is required</span>}

        <div className="w-full py-2">
          <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
