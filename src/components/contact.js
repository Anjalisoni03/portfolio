import React from "react";
import Layout from "./layout";

function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-baseline justify-center text-left text-white mx-auto w-[70%] h-3/5">
        <h1 className="text-5xl font-bold mb-8">Web Developer</h1>
        <p className="mt-4 text-2xl font-semibold">Contacts</p>
      </div>
    </Layout>
  );
}

export default Contact;
