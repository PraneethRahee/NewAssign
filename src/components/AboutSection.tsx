import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { scrollToElement } from "../lib/utils";

export default function AboutSection() {
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&h=900&q=80" 
              alt="Professional barber at work" 
              className="rounded-md shadow-lg w-full"
            />
          </motion.div>
          
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-heading mb-6 text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Founded in 2010, Elite Cuts has established itself as the premier destination for men seeking exceptional grooming services. Our team of skilled barbers combines traditional techniques with modern trends to deliver an unparalleled experience.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We believe that a great haircut is more than just a service—it's a confidence booster and a form of self-expression. Every client who sits in our chair receives personalized attention and leaves looking and feeling their best.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "15k+", label: "Happy Clients" },
                { value: "8", label: "Expert Barbers" },
                { value: "25+", label: "Style Options" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={statVariants}
                >
                  <div className="text-secondary text-4xl font-bold">{stat.value}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                className="bg-secondary hover:bg-accent text-white font-medium py-3 px-8 rounded-sm"
                onClick={() => scrollToElement("contact")}
              >
                Meet Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
