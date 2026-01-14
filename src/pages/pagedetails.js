import { useParams, Link } from "react-router-dom";
import PageWrapper from "../components/pagewrapper";

const projects = [
{
    id: "portfolio",
    title: "Portfolio Website",
    description: "A professional portfolio website built with React anf Tailwind CSS to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript", "GitHub Pages"],
    details: "A responsive portfolio website built with React and Tailwind CSS, featuring a modern design and smooth animations.This project showcases my skills in React, routing, animations, and responsive design. ",
    link: "https://mofokenglerato.github.io/professionalprofile",
},

{
    id: "weather-app",
    title: "Weather App",
    description: "A weather application that provides real-time weather updates using OpenWeatherMap API.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    details: "A weather application that fetches real-time weather data from the OpenWeatherMap API. Users can search for any city and get current weather conditions, including temperature, humidity, and wind speed. The app features a clean and user-friendly interface built with HTML, CSS, and JavaScript.",
    link: "",
},

{
    id: "university-application-app",
    title: "University Application App",
    description: "An application that helps students browse different universities that they can apply for based on their preferences. Students can also get updates when will the applications be open and close.",
    tech: ["React", "Node.js", "SQL Database"],
    details: "An application that helps students browse different universities that they can apply for based on their preferences. Students can also get updates when will the applications be open and close.",
    link: "",
},

{
    id: "scientific-calculator-app",
    title: "Scientific Calculator App",
    description: "A scientific calculator app that performs advanced mathematical calculations and functions.",
    tech: ["Java", "JavaFX"],
    details: "A scientific calculator app that performs advanced mathematical calculations and functions.",
    link: "",
}

]


export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageWrapper>
        <p className="pt-24 text-center">Project not found</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">

          <Link
            to="/projects"
            className="text-blue-600 hover:underline mb-6 inline-block"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            {project.details}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Visit Live Project
          </a>

        </div>
      </section>
    </PageWrapper>
  );
}