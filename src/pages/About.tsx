import { motion } from "framer-motion";
import Section from "../components/Section";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

export const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "5+", label: "Projects Completed" },
    // { value: "15+", label: "Happy Clients" },
    // { value: "99%", label: "Client Satisfaction" },
  ];

  const experiences = [
    {
      id: 1,
      period: "Dec 2023 - Present",
      role: "Full stack Developer",
      company: "Aifa Labs",
      description: [
        "Developed a fully functional Learning Management System (LMS) using Next.js and Firebase, focusing on scalability, performance, and real-time updates.",
        "Integrated Firebase Authentication for secure login and user role-based access control.",
        "Designed dynamic pages with Next.js routing and server-side rendering (SSR) to improve SEO and performance.",
        "Improved page load time by 35% using dynamic imports and Next.js optimization.",
        "Wrote unit and integration tests using Jest and React Testing Library to ensure component reliability and maintainability.",
        "Collaborated with product and design teams to deliver a clean, responsive, and intuitive UI with Material UI components.",
      ],
    },
    {
      id: 2,
      period: "Aug 2022- oct 2023",
      role: "Mern Stack Developer",
      company: "Ug infosystems",
      description: [
        "Developed new features and enhancements for the application using React and TypeScript",
        "Implemented REST APIs to connect the application to the backend services",
        "Optimized application performance by implementing lazy loading and code splitting",
        "Collaborated with cross-functional teams to ensure timely delivery of project milestones.",
        "Debugged and resolved application issues to improve user experience",
      ],
    },
    {
      id: 3,
      period: "Apr 2018 - Jul 2022",
      role: "Software Engineer",
      company: "YSK Infotech",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Implemented REST APIs to connect the application to the backend services.",
        "Optimized application performance by implementing lazy loading and code splitting.",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      period: "2016 - 2020",
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "v.k.r., v.n.b & a.g.k. college of engineering",
      percentage: "7.68 cgpa",
      description:
        "Graduated with honors. Specialized in web development and interactive media.",
    },
    {
      id: 2,
      period: "2014 - 2016",
      degree: "Intermediate",
      institution: "Vidyalaya Junior College",
      percentage: "93 %",
      description:
        "Intensive program focusing on advanced React patterns and performance optimization.",
    },
    {
      id: 3,
      period: "2013- 2014",
      degree: "Secondary School Certificate",
      institution: "Montessori (E.M) High School",
      percentage: "9.3 cgpa",
      description:
        "Mastered 3D rendering techniques for the web and interactive animation principles.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="pt-20">
      {/* About Me Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="Learn about my journey, experience, and what drives me as a developer"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <img
                src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1734&q=80"
                alt="Developer working"
                className="rounded-lg object-cover"
                width={500}
                height={600}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-bold">
              MERN Stack Developer with a passion for creating immersive web
              experiences
            </h3>
            <p className="mb-6 text-foreground/70">
              Hi there! I'm a passionate developer specializing in creating
              dynamic and immersive web applications. With expertise in the MERN
              stack (MongoDB, Express, React, Node.js) and advanced frontend
              technologies like Three.js, I bridge the gap between functional
              web applications and engaging user experiences.
            </p>
            <p className="mb-6 text-foreground/70">
              My journey began with traditional web development, but I quickly
              became fascinated with the possibilities of creating interactive
              web applications. This led me to master Next.js and related
              technologies, allowing me to create unique interactive experiences
              that stand out in today's digital landscape.
            </p>
            <p className="mb-6 text-foreground/70">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge
              through blog posts and community events.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="My professional journey through the tech world"
        className="bg-muted/20"
      >
        <div className="relative mx-auto max-w-6xl">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 ml-8 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5" />

          {/* Timeline Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-16 md:mb-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div
                className={`flex flex-col md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-5 z-10 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-ml-2" />
                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="rounded-lg bg-card p-6 shadow-md">
                    <h3 className="mt-2 text-xl font-bold">{exp.role}</h3>
                    <p className="text-foreground/70">{exp.company}</p>
                    <br />
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {exp.period}
                    </span>
                    <br />
                    <br />

                    {/* <p className="mt-3 text-foreground/70">{exp.description}</p> */}
                    {exp.description.map((point, index) => (
                      <li
                        key={`${index}`}
                        className="text-white-300 text-[16px] pl-1 mb-[4px] tracking-wider"
                      >
                        {point}
                        {<br />}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Education"
        subtitle="My academic background and certifications"
      >
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 ml-8 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5" />

          {/* Timeline Items */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative mb-16 md:mb-8"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div
                className={`flex flex-col md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-5 z-10 h-4 w-4 rounded-full bg-secondary md:left-1/2 md:-ml-2" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="rounded-lg bg-card p-6 shadow-md">
                    <h3 className="mt-2 text-xl font-bold">{edu.degree}</h3>
                    <p className="text-foreground/70">{edu.institution}</p>
                    <br />
                    <div className="flex justify-between">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-secondary-foreground">
                        {edu.period}
                      </span>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-secondary-foreground mr-[15px]">
                        {edu.percentage}
                      </span>
                    </div>
                    <br />
                    <p className="mt-3 text-foreground/70">{edu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
