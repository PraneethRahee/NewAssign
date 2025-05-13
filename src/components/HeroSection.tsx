import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { scrollToElement } from "../lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4 text-shadow">
            PREMIUM BARBER EXPERIENCE
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-shadow">
            Classic cuts, modern styles, and exceptional service
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-accent text-white font-medium py-3 px-8 rounded-sm text-lg"
            onClick={() => scrollToElement("contact")}
          >
            BOOK APPOINTMENT
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center z-20">
        <motion.a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("services");
          }}
          className="text-white inline-block"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.a>
      </div>
    </section>
  );
}
