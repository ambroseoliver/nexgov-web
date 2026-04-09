import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

import agmImg from "@/assets/services/agm.jpg";
import screensImg from "@/assets/services/screens.jpg";
import eboardImg from "@/assets/services/eboard.jpg";
import cyberImg from "@/assets/services/cyber.jpg";
import visitorImg from "@/assets/services/visitor.jpg";
import hardwareImg from "@/assets/services/hardware.jpg";
import meetingImg from "@/assets/services/meeting.jpg";
import avImg from "@/assets/services/av.jpg";
import edmsImg from "@/assets/services/edms.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import dataImg from "@/assets/services/data.jpg";

const services = [
  {
    title: "AGM Polling Solutions",
    desc: "Electronic voting and AGM management for transparent, efficient decision-making.",
    img: agmImg,
  },
  {
    title: "Interactive Screens",
    desc: "High-definition interactive displays for boardrooms, classrooms, and public spaces.",
    img: screensImg,
  },
  {
    title: "E-Board Solutions",
    desc: "Paperless board meeting management with secure digital document sharing.",
    img: eboardImg,
  },
  {
    title: "Cyber Security",
    desc: "End-to-end cybersecurity solutions protecting networks, data, and digital assets.",
    img: cyberImg,
  },
  {
    title: "Visitor Management",
    desc: "Smart visitor registration, tracking, and access control for secure premises.",
    img: visitorImg,
  },
  {
    title: "IT Hardware",
    desc: "Supply and installation of enterprise-grade IT hardware and infrastructure.",
    img: hardwareImg,
  },
  {
    title: "Meeting Boards Solution",
    desc: "Intelligent meeting room management systems with scheduling and collaboration tools.",
    img: meetingImg,
  },
  {
    title: "Audio Visual & Unified Communications",
    desc: "Complete AV integration and unified communications platforms for seamless collaboration.",
    img: avImg,
  },
  {
    title: "Electronic Document Management",
    desc: "Secure, searchable digital document systems that eliminate paper workflows.",
    img: edmsImg,
  },
  {
    title: "Cloud Computing",
    desc: "Scalable cloud infrastructure, migration services, and managed solutions.",
    img: cloudImg,
  },
  {
    title: "Data Analytics",
    desc: "Actionable insights and analytics to support smarter institutional decision-making.",
    img: dataImg,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-20 sm:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-xs sm:text-sm uppercase tracking-widest"
          >
            Our Core Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Technology Solutions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            NexGov Technologies Ltd offers a comprehensive portfolio of
            technology solutions spanning governance, education, enterprise, and
            security.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between group border border-border p-6 hover:shadow-elegant transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="h-44 w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Button
                className="w-full bg-black text-white font-medium rounded-md mt-auto"
                onClick={() => setSelectedService(service)}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Learn More Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              ✕
            </button>
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
              {selectedService.title}
            </h3>
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {selectedService.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
