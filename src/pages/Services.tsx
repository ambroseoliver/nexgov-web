import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import {
  Vote, Monitor, UserCheck, Server, MonitorSmartphone, ShieldCheck,
  Cloud, BarChart3, FileText
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: Vote, title: "AGM & Polling Systems", desc: "Electronic voting and AGM management for transparent, efficient decision-making in boardrooms, cooperatives, and general assemblies." },
  { icon: Monitor, title: "E-Board Solutions", desc: "Paperless board meeting management with secure digital document sharing, real-time collaboration, and voting capabilities." },
  { icon: UserCheck, title: "Visitor Management Systems", desc: "Smart visitor registration, tracking, and access control for secure premises with real-time monitoring and reporting." },
  { icon: Server, title: "IT Hardware & Infrastructure", desc: "Supply and installation of enterprise-grade IT hardware, networking equipment, and complete infrastructure solutions." },
  { icon: MonitorSmartphone, title: "Interactive Smart Displays", desc: "High-definition interactive displays for boardrooms, classrooms, and public spaces with multi-touch and collaboration features." },
  { icon: ShieldCheck, title: "Cybersecurity Solutions", desc: "End-to-end cybersecurity solutions protecting networks, data, and digital assets with threat detection and incident response." },
  { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud infrastructure, migration services, and managed cloud solutions tailored for African institutions and enterprises." },
  { icon: BarChart3, title: "Data Analytics", desc: "Actionable institutional insights through advanced analytics, reporting dashboards, and data-driven decision-making tools." },
  { icon: FileText, title: "Document Management Systems", desc: "Secure, searchable, and compliant digital document management systems that eliminate paper and streamline workflows." },
];

const Services = () => (
  <div>
    <PageHero
      badge="Our Services"
      title="Comprehensive Technology Solutions"
      description="From governance and cybersecurity to education and cloud infrastructure — we deliver integrated solutions for every sector."
    />

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ delay: i * 0.05, duration: 0.5 }}
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

export default Services;
