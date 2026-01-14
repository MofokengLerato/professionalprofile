import React from "react";
import ScrollReveal from "../components/scrollreveal";
import { FaReact,FaHtml5,FaCss3Alt,FaGitAlt,FaGithub, FaCertificate, FaShieldAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import PageWrapper from "../components/pagewrapper";


const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
];

const certificates = [
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/professional-cert/T4US8VKS3RZ8",
    type: "certificate",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/WJEHZB6VQFFH",
    type: "certificate",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/U7XWFRZ4Y0X7",
    type: "certificate",
  },
  {
    title: "Connect and Protect: Networks and Netework",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/L7DN5IGZOHUB",
    type: "certificate",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/GD884A0SO4II",
    type: "certificate",
  },
  {
    title: "Assets, Threats, and Vulnerabilities",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/6U5TW13QRO4J",
    type: "certificate",
  },
  {
    title: "Sound the Alarm: Detection and Response",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/EPLK7V77ED00",
    type: "certificate",
  },
  {
    title: "Automate Cybersecurity Tasks with Python",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/YKDWVVNEEUBF",
    type: "certificate",
  },
  {
    title: "Put It to Work: Prepare for Cybersecurity Jobs",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org/verify/WN59U82UM31C",
    type: "certificate",
  },
   {
    title: "Google Cybersecurity Professional Certificate V2",
    issuer: "Google",
    year: "2025",
    link: "https://www.credly.com/badges/dd9df5a3-78dc-49cf-aa27-494d90666b63/public_url",
    type: "badge",
  },
  {
    title: "Networking Academy Learn-A-Thon 2025",
    issuer: "Cisco",
    year: "2025",
    link: "https://www.credly.com/badges/d4e84fe3-e18c-457d-943b-80055314ac34/public_url",
    type: "badge",
  },
 
];


export default function About() {
  return (
    <PageWrapper>
<section className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
            </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mb-12 leading-relaxed">
        I’m an IT graduate with a strong interest in frontend development.
              I enjoy building clean, responsive interfaces and continuously
              improving my skills through hands-on projects.
              My journey has been driven by a passion for technology and a keen interest in cybersecurity and business analysis.
    </p>
        </ScrollReveal>

        {/* Skills */}

        <ScrollReveal delay={0.2}>
    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
        Technical Skills
    </h2>
        </ScrollReveal>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                </div>
            </ScrollReveal>
        ))}


    </div>

{/* Certificates & Badges */}

        <ScrollReveal delay={0.3}>
  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-16 mb-6">
    Certificates & Badges
  </h2>
</ScrollReveal>

<div className="grid sm:grid-cols-2 gap-6">
  {certificates.map((cert, index) => (
    <ScrollReveal key={index} delay={index * 0.1}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex gap-4 hover:shadow-lg transition">

        <div className="text-3xl text-blue-600">
          {cert.type === "badge" ? <FaShieldAlt /> : <FaCertificate />}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {cert.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {cert.issuer} • {cert.year}
          </p>

          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 hover:underline mt-1 inline-block"
            >
              View Credential →
            </a>
          )}
        </div>

      </div>
    </ScrollReveal>
  ))}
</div>




        {/* <h1>About Me</h1>
        <p>
            I am a recent IT graduate with a strong foundation in various IT domains. My journey has been driven by a passion for technology and a keen interest in cybersecurity and business analysis.
        </p>
        <p>Here is my website link in order to get to know me and my work: https://mofokenglerato.github.io/professionalprofile/</p> */}
        </div>
    </section>
    </PageWrapper>
    
);
}