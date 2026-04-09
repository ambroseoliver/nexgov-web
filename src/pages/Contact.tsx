import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <PageHero
        badge="Contact"
        title="Partner With Us"
        description="Ready to transform your institution? Get in touch and let's start building the future together."
      />

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div {...fadeUp} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a technology partner for a government tender, school modernization, or enterprise digital transformation — we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Email</p>
                    <a href="mailto:info@nexgov.co.ke" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      info@nexgov.co.ke
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Phone</p>
                    <a href="tel:+254725875924" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      +254 725 875 924
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-xl space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-heading font-medium text-foreground mb-2">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                    maxLength={200}
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div {...fadeUp} className="mt-16 rounded-xl overflow-hidden border border-border h-80 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-accent/30 mx-auto mb-3" />
              <p className="text-muted-foreground font-heading">Nairobi, Kenya</p>
              <p className="text-muted-foreground/60 text-sm">Google Maps integration available</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
