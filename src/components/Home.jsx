import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="container mx-auto text-center py-10">
        {/* Intro Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I'm Shivankit Agarwal
        </h1>

        {/* Short Intro */}
        <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          A passionate front-end developer with expertise in building user-friendly, dynamic web applications. 
          I specialize in ReactJS, Tailwind CSS, and enjoy solving complex problems with elegant solutions.
          Let's build something amazing together!
        </p>

        {/* CTA Button */}
        {/* <div className="mt-8">
          <a href="#projects" className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition duration-300">
            See My Work
          </a>
        </div> */}
      </div>

      {/* Photo/Work Section */}
      {/* <div id="work" className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-6">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          {/* Replace with your actual work images */}
          {/* <div className="bg-gray-800 p-4 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Work 1" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg mt-4 font-semibold">The WhisperWire</h3>
            <p className="text-gray-400 mt-2">Designed a Chat Application allowing users to communicate in real-time, featuring secure authentication and
            efficient message storage.</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Work 2" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg mt-4 font-semibold">The Advertising Solution</h3>
            <p className="text-gray-400 mt-2">Developed an Advertising Solution enabling businesses to efficiently search and book hoarding spaces for their
            advertisements, streamlining the ad placement process and increasing booking efficiency.</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="https://via.placeholder.com/300" alt="Work 3" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg mt-4 font-semibold">Online Restaurant Platform</h3>
            <p className="text-gray-400 mt-2">Created a responsive online platform for restaurants using ReactJS for UI rendering and Redux to manage the
            global application state</p>
          </div> */}

          {/* Add or remove more projects as needed */}
        {/* </div>
      </div> */}

      {/* Technology Section */}
      {/* <div id="skills" className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-6">Technologies I Know</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">HTML</span>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">CSS</span>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">ReactJS</span>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">TailwindCSS</span>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">Firebase</span>
          <span className="bg-teal-600 text-white px-4 py-2 rounded-lg">Git & GitHub</span> */}
          {/* Add more technologies as needed */}
        {/* </div>
      </div> */}

      {/* Technologies I'm Learning */}
      {/* <div id="learning" className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold mb-6">Technologies I'm Learning</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <span className="bg-teal-500 text-white px-4 py-2 rounded-lg">Next.js</span>
          <span className="bg-teal-500 text-white px-4 py-2 rounded-lg">Express.js</span>
          <span className="bg-teal-500 text-white px-4 py-2 rounded-lg">MongoDB</span>
          <span className="bg-teal-500 text-white px-4 py-2 rounded-lg">Node.js</span> */}
          {/* Add more technologies as you're learning */}
        {/* </div>
      </div> */}
    </section>
  );
};

export default Home;
