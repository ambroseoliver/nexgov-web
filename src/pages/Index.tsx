import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Vote, Monitor, UserCheck, Server, MonitorSmartphone, ShieldCheck,
  Cloud, BarChart3, FileText, ChevronRight, Lightbulb, Globe, Wrench,
  Cpu, Users, Star, Quote
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import schoolSystem from "@/assets/school-system.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: Vote, title: "AGM & Polling", desc: "Electronic voting and transparent decision-making" },
  { icon: Monitor, title: "E-Board Solutions", desc: "Paperless board meeting management" },
  { icon: UserCheck, title: "Visitor Management", desc: "Smart registration and access control" },
  { icon: Server, title: "IT Infrastructure", desc: "Enterprise-grade hardware solutions" },
  { icon: MonitorSmartphone, title: "Smart Displays", desc: "Interactive HD displays for every space" },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "End-to-end network and data protection" },
  { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud infrastructure" },
  { icon: BarChart3, title: "Data Analytics", desc: "Actionable institutional insights" },
  { icon: FileText, title: "Document Management", desc: "Secure digital document systems" },
];

const strengths = [
  { icon: Lightbulb, title: "In-House Innovation", desc: "We build our own solutions, not just resell others'" },
  { icon: Globe, title: "African-First Design", desc: "Solutions designed for local infrastructure and needs" },
  { icon: Wrench, title: "End-to-End Delivery", desc: "From supply to installation to support" },
  { icon: Cpu, title: "RFID & IoT Integration", desc: "Cutting-edge hardware-software fusion" },
  { icon: Users, title: "Multi-Sector Expertise", desc: "Government, Finance, Education, Enterprise" },
];

const testimonials = [
  { name: "Dr. Amina Osei", role: "County Director of Education, Nairobi", quote: "NexGov transformed our school administration. The RFID tracking system gives us real-time visibility we never had before." },
  { name: "James Mwangi", role: "CEO, Premier SACCO", quote: "Their AGM polling system made our annual meeting seamless. Over 2,000 members voted digitally with complete transparency." },
  { name: "Sarah Njeri", role: "IT Director, Ministry of Health", quote: "NexGov's cybersecurity solutions protect our critical health data. Their team is responsive, professional, and deeply knowledgeable." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Smart city technology" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 hero-overlay opacity-85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(195_90%_50%/0.15),transparent_60%)]" />
        </div>
        <div className="relative container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-heading font-semibold uppercase tracking-wider mb-6"
            >
              Powering Smart Institutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] text-balance"
            >
              Transforming Africa's Institutions Through{" "}
              <span className="gradient-text">Intelligent Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed"
            >
              Cutting-edge solutions across governance, education, enterprise, and cybersecurity — purpose-built for Africa's institutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8">
                  Get Started
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold text-base px-8">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Technology Solutions"
            description="From governance and cybersecurity to education and cloud infrastructure — we deliver integrated solutions for every sector."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="glass-card p-6 rounded-xl hover:border-accent/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="font-heading border-accent text-accent hover:bg-accent/5">
                View All Services <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose NexGov */}
      <section className="section-padding hero-overlay relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(195_90%_50%/0.1),transparent_60%)]" />
        <div className="relative container-narrow mx-auto">
          <SectionHeading
            badge="Why NexGov"
            title="Built Different. Built for Africa."
            description="We combine world-class technology with deep local expertise to drive digital transformation."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-primary-foreground mb-2">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-heading font-semibold uppercase tracking-wider mb-4">
                Flagship Product
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
                Integrated School Management System
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our most innovative in-house solution — a fully integrated system powered by RFID technology, purpose-built to transform how African schools operate.
              </p>
              <ul className="space-y-3 mb-8">
                {["RFID Student Tracking", "Smart Attendance", "GPS Transport Monitoring", "Finance & Payments", "Academic Management", "Parent Communication"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/flagship-product">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={schoolSystem} alt="School Management System Dashboard" loading="lazy" className="rounded-2xl shadow-2xl w-full" width={1200} height={800} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow mx-auto">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by Institutions Across Africa"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 rounded-xl"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-overlay relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(195_90%_50%/0.1),transparent_60%)]" />
        <div className="relative container-narrow mx-auto text-center">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight text-balance"
          >
            Ready to Transform Your Institution?
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto">
            Partner with NexGov and join Africa's digital transformation journey.
          </motion.p>
          <motion.div {...fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold px-8">
                Partner With Us
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading px-8">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
