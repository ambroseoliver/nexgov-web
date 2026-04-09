import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Landmark, Banknote, GraduationCap, Building2, ShieldCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const sectors = [
  { icon: Landmark, title: "Government", desc: "Ministries, county governments, parastatals, and public institutions requiring secure, compliant, and efficient digital systems for service delivery.", color: "bg-blue-500/10 text-blue-500" },
  { icon: Banknote, title: "Financial Institutions", desc: "Banks, SACCOs, insurance companies, and financial institutions needing AGM polling, document management, and cybersecurity solutions.", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: GraduationCap, title: "Education", desc: "Pre-Primary through University seeking to modernize learning, administration, and campus management with our integrated school system.", color: "bg-amber-500/10 text-amber-500" },
  { icon: Building2, title: "Enterprise", desc: "Corporates, NGOs, and large organizations needing AV systems, interactive screens, cloud computing, and unified communications.", color: "bg-violet-500/10 text-violet-500" },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Organizations across all sectors requiring network protection, data security, compliance, and incident response capabilities.", color: "bg-rose-500/10 text-rose-500" },
];

const Industries = () => (
  <div>
    <PageHero
      badge="Industries"
      title="Sectors We Serve"
      description="Delivering tailored technology solutions across Kenya and the broader African market."
    />

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto space-y-8">
        {sectors.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeUp}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8 md:p-10 rounded-xl flex flex-col md:flex-row items-start gap-6 hover:border-accent/30 transition-all"
          >
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${s.color}`}>
              <s.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Industries;
