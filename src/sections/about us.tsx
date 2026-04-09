import { motion, cubicBezier } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Building2, GraduationCap, Briefcase, Shield } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
};

const reach = [
  {
    icon: Building2,
    title: "Government",
    desc: "Tenders & Public Sector",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Schools & Universities",
  },
  {
    icon: Briefcase,
    title: "Enterprise",
    desc: "Corporate & Finance",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Network & Data Protection",
  },
];

const About = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* 🌈 Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/40 to-background" />

      {/* Glow Accent */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 blur-3xl rounded-full" />

      <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading badge="About NexGov" title="Who We Are" />

        {/* Grid */}
        <div className="relative mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* 🔥 Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-border/60" />

          {/* LEFT */}
          <motion.div {...fadeUp} className="space-y-6 pr-0 lg:pr-10">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              NexGov Technologies Ltd is a forward-thinking technology company
              dedicated to delivering cutting-edge digital solutions to
              government institutions, financial organizations, educational
              establishments, and enterprises across Africa.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              We combine world-class technology with deep local expertise to
              drive digital transformation, operational efficiency, and
              innovation across every sector we serve.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Our solutions are purpose-built for the African context — robust,
              scalable, and designed to solve real challenges faced by
              institutions today.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div {...fadeUp} className="lg:pl-10">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-8">
              Our Reach
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reach.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative p-5 rounded-2xl border bg-white/40 backdrop-blur-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-accent/10 blur-xl" />

                  <div className="relative flex items-start gap-4">
                    {/* ICON */}
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
