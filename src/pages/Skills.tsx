import { motion } from "framer-motion";
import Section from "../components/Section";
import SkillCategory, { type Skill } from "../components/SkillCategory";
import ThreeCanvas from "../components/ThreeCanvas";
import { useTheme } from "../utils/ThemeContext";

export const Skills = () => {
  const { theme } = useTheme();

  // Frontend skills
  const frontendSkills: Skill[] = [
    { name: "React", proficiency: 95, icon: <ReactIcon /> },
    { name: "TypeScript", proficiency: 90, icon: <TypeScriptIcon /> },
    { name: "Next JS", proficiency: 80, icon: <TypeScriptIcon /> },
    { name: "Three.js", proficiency: 85, icon: <ThreeJsIcon /> },
    { name: "HTML/CSS", proficiency: 95, icon: <HtmlCssIcon /> },
    { name: "Material UI", proficiency: 95, icon: <TailwindIcon /> },
    { name: "Tailwind CSS", proficiency: 83, icon: <TailwindIcon /> },
    { name: "JavaScript", proficiency: 95, icon: <JavaScriptIcon /> },
    { name: "Redux Toolkit", proficiency: 98, icon: <JavaScriptIcon /> },
  ];

  // Backend skills
  const backendSkills: Skill[] = [
    { name: "Node.js", proficiency: 88, icon: <NodeIcon /> },
    { name: "Express", proficiency: 85, icon: <ExpressIcon /> },
    { name: "MongoDB", proficiency: 82, icon: <MongoIcon /> },
    { name: "REST APIs", proficiency: 90, icon: <RestApiIcon /> },
    { name: "GraphQL", proficiency: 75, icon: <GenericIcon /> },
    { name: "Socket.io", proficiency: 78, icon: <GenericIcon /> },
  ];

  // Other tools
  const toolsSkills: Skill[] = [
    { name: "Git", proficiency: 90, icon: <GenericIcon /> },
    { name: "Webpack", proficiency: 80, icon: <GenericIcon /> },
    { name: "Vite", proficiency: 85, icon: <GenericIcon /> },
    { name: "Jest", proficiency: 75, icon: <GenericIcon /> },
    { name: "Docker", proficiency: 70, icon: <GenericIcon /> },
    { name: "AWS", proficiency: 65, icon: <GenericIcon /> },
  ];

  // 3D and Animation skills
  // const otherSkills: Skill[] = [
  //   { name: "Three.js", proficiency: 85, icon: <ThreeJsIcon /> },
  //   { name: "WebGL", proficiency: 70, icon: <GenericIcon /> },
  //   { name: "GSAP", proficiency: 80, icon: <GenericIcon /> },
  //   { name: "Framer Motion", proficiency: 85, icon: <GenericIcon /> },
  //   { name: "Blender", proficiency: 65, icon: <GenericIcon /> },
  //   { name: "Shader Programming", proficiency: 60, icon: <GenericIcon /> },
  // ];

  return (
    <div className="pt-20">
      <Section
        id="skills"
        title="Skills"
        subtitle="Technical skills and technologies I work with"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            {/* Front-end Skills */}
            <SkillCategory
              title="Frontend Development"
              skills={frontendSkills}
            />

            {/* Backend Skills */}
            <SkillCategory
              title="Backend Development"
              skills={backendSkills}
              delay={0.2}
            />

            {/* Tools & Deploymen */}
            <SkillCategory
              title="Tools & Deployment"
              skills={toolsSkills}
              delay={0.6}
            />

            {/* Other Skills */}
            {/* <SkillCategory
              title="Other Skills"
              skills={otherSkills}
              delay={0.4}
            /> */}
          </div>

          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sticky top-32 mx-auto h-[500px] max-w-[500px] rounded-lg shadow-lg overflow-hidden"
            >
              <ThreeCanvas>
                {/* You would typically include a 3D scene here - for simplicity, using a placeholder */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <mesh>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshStandardMaterial
                    color={theme === "dark" ? "#3b82f6" : "#2563eb"}
                    metalness={0.5}
                    roughness={0.4}
                  />
                </mesh>
              </ThreeCanvas>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">Interactive Skills</h3>
                <p className="text-sm text-foreground/70">
                  Combining traditional web development with advanced user
                  interfaces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

// Simple Icon Components - In a real project, you'd likely use an icon library
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    <path d="M12 22.5c-5.834 0-10.5-2.941-10.5-6.5S6.166 9.5 12 9.5s10.5 2.941 10.5 6.5-4.666 6.5-10.5 6.5Zm0-12c-5.178 0-9.5 2.429-9.5 5.5s4.322 5.5 9.5 5.5 9.5-2.429 9.5-5.5-4.322-5.5-9.5-5.5Z" />
    <path d="M12 9.5c-3.271 5.857-3.271 10.143 0 16 3.271-5.857 3.271-10.143 0-16Z" />
    <path d="M12 25.5c3.271-5.857 3.271-10.143 0-16-3.271 5.857-3.271 10.143 0 16Z" />
  </svg>
);
const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M3 3h18v18H3V3zm10.71 14.29c.18.18.43.29.71.29s.53-.11.71-.29l2-2a1.003 1.003 0 0 0-1.42-1.42L15 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v5.59l-.71-.71a1.003 1.003 0 0 0-1.42 1.42l2 2zM7 12h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z" />
  </svg>
);
const ThreeJsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12.5 0.3h11.3v11.3h-11.3v-11.3zM12.5 12.5h11.3v11.3h-11.3v-11.3zM0.3 12.5h11.3v11.3h-11.3v-11.3zM6.5 6.5 12 0.3l5.5 6.2-5.5 6-5.5-6.0z" />
  </svg>
);
const HtmlCssIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z" />
  </svg>
);
const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);
const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
);
const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
  </svg>
);
const MongoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);
const RestApiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
  </svg>
);
const GenericIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
  </svg>
);

export default Skills;
