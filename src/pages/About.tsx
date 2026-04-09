import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Globe, Users, Award, Zap } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => (
  <div>
    <PageHero
      badge="About Us"
      title="Who We Are"
      description="A forward-thinking African technology company dedicated to delivering cutting-edge digital solutions across the continent."
    />

    {/* About Content */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Built for Africa's Digital Future
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              NexGov Technologies Ltd combines world-class technology with deep local expertise to drive digital transformation, operational efficiency, and innovation across every sector we serve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our solutions are purpose-built for the African context — robust, scalable, and designed to solve real challenges faced by institutions today.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src={aboutHero} alt="African technology innovation" loading="lazy" className="rounded-2xl shadow-xl w-full" width={1920} height={800} />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="glass-card p-8 md:p-10 rounded-xl">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver innovative, reliable, and affordable technology solutions that empower institutions to work smarter, serve better, and grow faster — leveraging the power of automation, AI, and connectivity.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="glass-card p-8 md:p-10 rounded-xl">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be Africa's most trusted technology partner — transforming how governments, schools, and enterprises operate through intelligent, integrated digital solutions built for the future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <SectionHeading badge="Our Values" title="What Drives Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: "African-First", desc: "Solutions designed for local realities" },
            { icon: Zap, title: "Innovation", desc: "We build, not just resell" },
            { icon: Users, title: "Partnership", desc: "We grow with our clients" },
            { icon: Award, title: "Excellence", desc: "Premium quality in everything" },
          ].map((v, i) => (
            <motion.div key={v.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
