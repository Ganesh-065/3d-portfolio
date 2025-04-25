import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/Section";
import ProjectCard, { type ProjectProps } from "../components/ProjectCard";

export const Projects = () => {
  // Sample project data - in a real app, this would come from an API or CMS
  const projects: ProjectProps[] = [
    {
      id: "project-1",
      title: "Hostel finder",
      description:
        "Find Your Perfect Hostel Around the World Discover affordable hostels in top destinations, meet fellow travelers, and create unforgettable memories.",
      image: "/images/hostel.png",
      tags: ["Three.js", "React", "WebGL", "GSAP"],
      demoLink: "https://hostel-finder-lovat.vercel.app/",
      codeLink: "https://github.com",
    },
    {
      id: "project-2",
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform with secure payment processing, user authentication, and product management.",
      image: "/images/ecommerce.png",
      tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      demoLink: "https://next-ecommerce-sepia-zeta.vercel.app/",
      codeLink: "https://github.com",
    },
    {
      id: "project-3",
      title: "Interactive Data Visualization",
      description:
        "Data visualization dashboard using D3.js and React for displaying complex datasets with interactive features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
      tags: ["D3.js", "React", "TypeScript", "API Integration"],
      demoLink: "https://example.com",
      codeLink: "https://github.com",
    },
    {
      id: "project-4",
      title: "Real-time Chat Application",
      description:
        "Real-time chat application with private messaging, group chats, and media sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
      tags: ["Socket.io", "React", "Node.js", "MongoDB"],
      demoLink: "https://example.com",
      codeLink: "https://github.com",
    },
    {
      id: "project-5",
      title: "Immersive Portfolio Template",
      description:
        "Portfolio template with immersive 3D elements and smooth animations for creative professionals.",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
      tags: ["Three.js", "React", "Framer Motion", "Tailwind CSS"],
      demoLink: "https://example.com",
      codeLink: "https://github.com",
    },
    {
      id: "project-6",
      title: "Weather Forecast App",
      description:
        "Weather forecast application with location-based services and interactive maps.",
      image:
        "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
      tags: ["React", "API Integration", "Geolocation", "Responsive Design"],
      demoLink: "https://example.com",
      codeLink: "https://github.com",
    },
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Available filters based on project tags
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];
  const filters = ["All", ...allTags];

  // Filtered projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="pt-20">
      <Section
        id="projects"
        title="Projects"
        subtitle="Explore my latest work and personal projects"
      >
        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/40 text-foreground/70 hover:bg-secondary/60"
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 20 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-foreground/70">
              No projects found with the selected filter.
            </p>
            <button
              className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground"
              onClick={() => setActiveFilter("All")}
            >
              Show All Projects
            </button>
          </motion.div>
        )}
      </Section>
    </div>
  );
};

export default Projects;
