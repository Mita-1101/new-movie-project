import React from "react";
import Header from "./Header";
import { CONTACT_IMAGE } from "../utils/constants";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { contactSchema } from "../schema";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: "",
  message: "",
};

const showToastMessage = () => {
  toast.success("Thank you for connecting. We will reach you shortly.", {
    position: toast.POSITION.TOP_RIGHT,
    className: "toast-message",
  });
};

const Contact = () => {
  const user = useSelector((store) => store.user);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        values.email = user?.email;
      
        action.resetForm();
        showToastMessage();
      },
    });

  return (
    <div className="relative">
      <Header />
      <div className="flex">
        <img
          className="object-cover h-screen"
          src={CONTACT_IMAGE}
          alt="Banner"
        />
      </div>
      <div className="top-1 md:top-1/5 left-7 md:left-1/3 absolute  md:w-4/12 transform translate-x-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact Us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {errors.name && touched.name ? (
              <p className="text-red-700 text-lg py-2 font-bold">
                {errors.name}
              </p>
            ) : null}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  disabled
                  id="email"
                  name="email"
                  type="email"
                  value={user?.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {errors.message && touched.message ? (
              <p className="text-red-700 text-lg py-2 font-bold">
                {errors.message}
              </p>
            ) : null}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
