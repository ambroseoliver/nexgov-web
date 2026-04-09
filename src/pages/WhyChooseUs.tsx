import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { Lightbulb, Globe, Wrench, Cpu, Users, CheckCircle2, ChevronRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const strengths = [
  { icon: Lightbulb, title: "In-House Innovation", desc: "We build our own solutions, not just resell others'. Our flagship school management system is 100% developed in-house." },
  { icon: Globe, title: "African-First Design", desc: "Solutions designed for local infrastructure, connectivity challenges, and institutional needs across the continent." },
  { icon: Wrench, title: "End-to-End Solutions", desc: "From supply to installation to ongoing support — we handle the complete technology lifecycle." },
  { icon: Cpu, title: "RFID & IoT Integration", desc: "Cutting-edge hardware-software fusion that connects physical spaces with digital intelligence." },
  { icon: Users, title: "Multi-Sector Expertise", desc: "Proven track record across Government, Finance, Education, and Enterprise sectors." },
];

const comparison = [
  { feature: "In-House School System", nexgov: true, competitors: "Limited" },
  { feature: "RFID Integration", nexgov: true, competitors: "Partial" },
  { feature: "AGM Polling", nexgov: true, competitors: "Rare" },
  { feature: "African-First Design", nexgov: true, competitors: "No" },
  { feature: "End-to-End Support", nexgov: true, competitors: "Limited" },
  { feature: "Multi-Sector Portfolio", nexgov: true, competitors: "Narrow" },
  { feature: "Cloud + On-Premise", nexgov: true, competitors: "Cloud Only" },
];

const WhyChooseUs = () => (
  <div>
    <PageHero
      badge="Why NexGov"
      title="Built Different. Built for Africa."
      description="Local expertise meets global technology standards with a deep commitment to African institutional needs."
    />

    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8 rounded-xl hover:border-accent/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">How We Compare</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-heading font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-heading font-semibold text-accent">NexGov</th>
                    <th className="text-center p-4 font-heading font-semibold text-muted-foreground">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50 last:border-0">
                      <td className="p-4 text-sm text-foreground">{row.feature}</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                      </td>
                      <td className="p-4 text-center text-sm text-muted-foreground">{row.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center mt-16">
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold px-8">
              Partner With Us <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default WhyChooseUs;
