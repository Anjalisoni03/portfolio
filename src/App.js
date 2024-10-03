import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-baseline justify-center text-left text-white mx-auto w-[70%] h-3/5">
        <h1 className="text-5xl font-bold mb-8">Web Developer</h1>
        <p className="mt-4 text-2xl font-semibold">
          I am a MERN stack developer with expertise in MongoDB, Express.js,
          React, and Node.js.
        </p>
        <p className="mt-2 text-2xl text-red-600 font-bold">
          Skills :&nbsp;
          <span className="text-white">
            JavaScript, HTML, CSS, React.js, Redux, Next.js, Node.js, Express,
            MongoDB, Postgres, Git
          </span>
        </p>
        <button className="mt-8 px-6 py-4 bg-[#FF0000] text-white text-lg font-semibold rounded-md hover:bg-red-600">
          I'm Looking to Hire
        </button>
      </div>
    </Layout>
  );
}

export default App;
