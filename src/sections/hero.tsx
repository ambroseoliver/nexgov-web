import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Smart technology background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,150,255,0.2),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-semibold tracking-wide mb-6"
          >
            Powering Smart Institutions
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight"
          >
            Transforming Africa's Institutions Through{" "}
            <span className="text-accent">Intelligent Technology</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
          >
            Cutting-edge solutions across governance, education, enterprise, and
            cybersecurity purpose built for Africa’s future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
              >
                Get Started
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
