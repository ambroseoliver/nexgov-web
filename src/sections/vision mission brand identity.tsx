import { motion } from "framer-motion";
import visionImg from "@/assets/about-hero.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const VisionMissionBrand = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <motion.div {...fadeUp} className="space-y-10">
            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={visionImg}
                alt="Vision"
                className="w-full h-[240px] sm:h-[320px] object-cover"
              />
            </div>

            {/* VISION */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To be Africa’s leading provider of innovative digital solutions,
                transforming institutions through technology, efficiency, and
                secure systems that empower sustainable growth.
              </p>
            </div>

            {/* MISSION */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To deliver cutting-edge, scalable, and reliable digital
                solutions tailored to the African environment, enabling
                organizations to achieve operational excellence and long-term
                impact.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div {...fadeUp} className="relative lg:pl-10">
            {/* Divider (desktop only) */}
            <div className="hidden lg:block absolute left-0 top-0 h-full w-px bg-gray-200" />

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Brand Identity
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                NexGov represents innovation, trust, and transformation. Our
                brand is built on delivering reliable technology solutions that
                bridge the gap between modern systems and Africa’s evolving
                digital landscape.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                We are committed to excellence, integrity, and forward-thinking
                strategies that enable institutions to thrive in a digital-first
                world.
              </p>

              {/* Subtle Accent Line */}
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionBrand;
