import PageWrapper from "../components/pagewrapper";
import ScrollReveal from "../components/scrollreveal";
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">

          <ScrollReveal>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let’s Connect
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12">
              I’m open to opportunities, collaborations, and meaningful conversations.
              Feel free to reach out using any of the platforms below.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/*CV*/}
            <ScrollReveal delay={0.2}>
              <a href="/Lerato_MofokengCV.pdf"
              download="Lerato_MofokengCV.pdf"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition">
               
        <FaFilePdf className="text-4xl text-red-600 dark:text-white mb-4 group-hover:scale-110 transition" />
       
                
                <h3 className="font-semibold text-gray-900 dark:text-white">
      Download CV
    </h3>
     <p className="text-sm text-gray-600 dark:text-gray-400">
      PDF, ready to share
    </p>
              </a>

            </ScrollReveal>
            
            {/* Email */}
            <ScrollReveal delay={0.3}>
              <a
                href="mailto:leratolee96mofokeng@gmail.com"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <FaEnvelope className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Email Me
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Direct & professional
                </p>
              </a>
            </ScrollReveal>

            {/* LinkedIn */}
            <ScrollReveal delay={0.4}>
              <a
                href="https://linkedin.com/in/lerato-mofokeng-a43799201"
                target="_blank"
                rel="noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <FaLinkedin className="text-4xl text-blue-700 mb-4 group-hover:scale-110 transition" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Professional network
                </p>
              </a>
            </ScrollReveal>

            {/* GitHub */}
            <ScrollReveal delay={0.5}>
              <a
                href="https://github.com/MofokengLerato"
                target="_blank"
                rel="noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <FaGithub className="text-4xl text-gray-800 dark:text-white mb-4 group-hover:scale-110 transition" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  GitHub
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View my projects
                </p>
              </a>
            </ScrollReveal>


          </div>

        </div>
      </section>
    </PageWrapper>
  );
}
