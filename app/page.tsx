import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-black px-6 py-6">

      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-5xl mx-auto mb-10">
        <h1 className="text-xl font-bold">Ridhi</h1>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-10">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Ridhi
        </h1>
        <p className="text-lg text-gray-600">
          Final Year Student | Aspiring Software Developer
        </p>
      </section>

      {/* About */}
      <section id="about" className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I love solving DSA problems and building full stack applications.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-5 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg">
              Meeting Room Booking System
            </h3>
            <p className="text-gray-600">
              Spring Boot + React project
            </p>
          </div>

          <div className="p-5 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg">
              Portfolio Website
            </h3>
            <p className="text-gray-600">
              Built using Next.js
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <p>Email: ridhianandshukla@gmail.com</p>
<p>GitHub: https://github.com/ridhi-ctrl</p>
<p>LinkedIn: https://www.linkedin.com/in/ridhi-anand-301401266/</p>

    </main>
  );
}