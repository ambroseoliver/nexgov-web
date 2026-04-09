import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Tablet, Bot, CalendarClock, BookOpen, ChevronRight } from "lucide-react";
import educationImg from "@/assets/education.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const solutions = [
  { icon: Tablet, title: "IT Tablets for Schools", desc: "Rugged, affordable tablets pre-loaded with educational content, designed for African school environments from primary to secondary level." },
  { icon: Bot, title: "Robotics & AI Programs", desc: "Hands-on robotics kits and AI learning programs that introduce students to coding, automation, and the technologies shaping tomorrow's world." },
  { icon: CalendarClock, title: "Timetabling Solutions", desc: "Automated, intelligent timetabling software that eliminates scheduling conflicts and optimizes resource allocation for schools and universities." },
  { icon: BookOpen, title: "EdTech Platforms", desc: "Comprehensive educational technology platforms including learning management systems, digital content libraries, and teacher training tools." },
];

const Education = () => (
  <div>
    <PageHero
      badge="Education"
      title="Innovating African Education"
      description="A full suite of education solutions designed to modernize learning environments and empower the next generation of African innovators."
    />

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.img
            src={educationImg}
            alt="Students using technology"
            loading="lazy"
            className="rounded-2xl shadow-xl w-full"
            width={1200}
            height={800}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Empowering Schools With Technology
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NexGov delivers technology solutions that transform classrooms into smart learning environments, equipping students with the tools they need for a digital future.
            </p>
            <Link to="/flagship-product">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading">
                Explore School System <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <SectionHeading badge="Solutions" title="Education Technology Suite" />
        <div className="grid sm:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 rounded-xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Education;
