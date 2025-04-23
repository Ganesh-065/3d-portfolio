import { motion } from 'framer-motion';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  proficiency: number; // 0-100
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay?: number;
}

export const SkillCategory = ({ title, skills, delay = 0 }: SkillCategoryProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="mb-12">
      <h3 className="mb-6 text-xl font-bold">{title}</h3>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="rounded-lg bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              {skill.icon && <div className="text-primary">{skill.icon}</div>}
              <div className="flex-1">
                <h4 className="font-medium">{skill.name}</h4>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary/30">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCategory;
