import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import {
  Locate, ClipboardCheck, DoorOpen, Bus, CreditCard, GraduationCap,
  Bell, UserCog, BookMarked, Utensils, CalendarDays, Shield
} from "lucide-react";
import schoolImg from "@/assets/school-system.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const modules = [
  { icon: Locate, title: "RFID Student Tracking", desc: "Real-time location tracking using RFID cards and badges across campus" },
  { icon: ClipboardCheck, title: "Smart Attendance", desc: "Automated roll-call with RFID-based check-ins and instant reports" },
  { icon: DoorOpen, title: "Access Control", desc: "Staff and visitor RFID access management for secure premises" },
  { icon: Bus, title: "GPS Transport Monitoring", desc: "Live bus location tracking with RFID boarding verification" },
  { icon: CreditCard, title: "Finance & Payments", desc: "Automated fee collection, POS cafeteria management with RFID wallet" },
  { icon: GraduationCap, title: "Academic Management", desc: "Timetable automation, exams, grading, and digital report cards" },
  { icon: Bell, title: "Parent Communication", desc: "Notification system via SMS, app, and email with performance dashboards" },
  { icon: UserCog, title: "Staff Management", desc: "Teacher HR management, admissions, and student lifecycle tracking" },
  { icon: BookMarked, title: "Library Management", desc: "RFID-tracked library resources and digital content management" },
  { icon: Utensils, title: "Cafeteria & POS", desc: "RFID wallet-based cafeteria and canteen management system" },
  { icon: CalendarDays, title: "Events Management", desc: "Co-curricular activities, events planning and coordination" },
  { icon: Shield, title: "Campus Safety", desc: "Emergency alerts, dormitory management, and safety monitoring" },
];

const FlagshipProduct = () => (
  <div>
    <PageHero
      badge="Flagship Product"
      title="Integrated School Management System"
      description="A fully integrated platform powered by RFID technology — purpose-built to transform how African schools operate from the ground up."
    />

    {/* Product Showcase */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              One System. Complete Control.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This end-to-end platform connects every aspect of school operations into one seamless, real-time system — giving administrators, parents, and teachers complete visibility and control.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Powered by RFID and IoT technology, the system automates attendance, tracking, payments, and academic management while keeping parents informed at every step.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-xl" />
            <img src={schoolImg} alt="School Management Dashboard" loading="lazy" className="relative rounded-2xl shadow-2xl w-full" width={1200} height={800} />
          </motion.div>
        </div>

        <SectionHeading
          badge="Features"
          title="Complete Module Suite"
          description="Every aspect of school operations covered in one integrated platform."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              {...fadeUp}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="glass-card p-6 rounded-xl hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <m.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div {...fadeUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "850+", label: "Students Tracked" },
            { value: "92%", label: "Attendance Rate" },
            { value: "24/7", label: "Real-Time Monitoring" },
            { value: "100%", label: "RFID Coverage" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 glass-card rounded-xl">
              <p className="text-3xl md:text-4xl font-heading font-bold gradient-text">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);

export default FlagshipProduct;
