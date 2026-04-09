import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">N</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">NexGov</span>
                <span className="block text-[10px] text-primary-foreground/60">Technologies Ltd</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Powering Smart Institutions — delivering cutting-edge digital solutions across governance, education, enterprise, and security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Education", path: "/education" },
                { label: "Flagship Product", path: "/flagship-product" },
                { label: "Industries", path: "/industries" },
                { label: "Why Choose Us", path: "/why-us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>AGM & Polling Systems</li>
              <li>E-Board Solutions</li>
              <li>Cybersecurity</li>
              <li>Cloud Computing</li>
              <li>Smart Displays</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                info@nexgov.co.ke
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                +254 725 875 924
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} NexGov Technologies Ltd. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Empowering Africa Through Intelligent Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
