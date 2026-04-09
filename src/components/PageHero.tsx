import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
}

const PageHero = ({ title, description, badge }: PageHeroProps) => (
  <section className="relative hero-overlay min-h-[50vh] flex items-center justify-center pt-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(195_90%_50%/0.08),transparent_70%)]" />
    <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-heading font-semibold uppercase tracking-wider mb-4"
        >
          {badge}
        </motion.span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight text-balance"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  </section>
);

export default PageHero;
