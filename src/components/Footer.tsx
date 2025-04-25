import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-5 w-5"
        >
          <path
            fill="currentColor"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/p-ganesh-09332b202/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="h-5 w-5"
        >
          <path
            fill="currentColor"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-card/50 py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span>Portfolio</span>
            </Link>
            <p className="text-foreground/70">
              React and TypeScript Developer with 3 years of hands-on experience
              in building fast, responsive, and maintainable web apps using
              Next.js. Passionate about clean UX and performance optimization.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground/70 hover:text-foreground">
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground/70 hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-foreground/70 hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="text-foreground/70 hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="text-foreground/70 hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="text-foreground/70">nrgane06@gmail.com</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
