const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Lerato Mofokeng | All rights reserved.
        </p>

        {/* Center */}
        <div className="flex gap-6 text-sm">
          <a href="#/" className="hover:text-blue-500">Home</a>
          <a href="#/projects" className="hover:text-blue-500">Projects</a>
          <a href="#/contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://mofokenglerato.github.io/professionalprofile/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lerato-mofokeng-a43799201"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
