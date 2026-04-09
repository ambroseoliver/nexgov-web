import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ badge, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
  >
    {badge && (
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider mb-4 ${
        light ? "bg-accent/20 text-accent" : "bg-accent/10 text-accent"
      }`}>
        {badge}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-balance ${
      light ? "text-primary-foreground" : "text-foreground"
    }`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-lg leading-relaxed ${
        light ? "text-primary-foreground/70" : "text-muted-foreground"
      }`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
