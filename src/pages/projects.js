import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../components/skeleton";
import PageWrapper from "../components/pagewrapper";
import ScrollReveal from "../components/scrollreveal";


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




export default function Projects () {

    const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1200);
  return () => clearTimeout(timer);
}, []);

    return(
        <PageWrapper>
<section className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
            
            <div className="max-w-6xl mx-auto px-6">

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Projects
                </h1>
                <h6 className="text-1xl  text-gray-900 dark:text-white mb-10">
                    Still Progressing...
                </h6>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {loading ? Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-48 w-full" />
                    )) : projects.map((project, index) => (
                        <ScrollReveal>
<div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">

                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">

                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} 
                                    className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}

                             </div>
                                <Link
                                to={`/projects/${project.id}`}
                                className="text-blue-600 hover:underline font-medium"
                                >
                                View Details →
                                </Link>


                            {/* <a href={project.link}
                            target="_blank"
                            rel="noreferrer" 
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                                 View Details →
                            </a> */}
                        </div>
                        </ScrollReveal>
                        
                    ))}
                </div>

            </div>

        </section>
        </PageWrapper>
        
    )

}
    

