import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-blue-900"
    >
      <form
        method="POST"
        action="https://getform.io/f/22b8fb58-d6e9-46b1-86ab-d1a42e3d1434"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-cyan-600">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or send me email on: ggvasalia4@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-gray-300 outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-300 outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-gray-300 outline-none "
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white px-4 py-3 my-8 mx-auto flex items-center border-2 border-white hover:bg-cyan-600">
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
