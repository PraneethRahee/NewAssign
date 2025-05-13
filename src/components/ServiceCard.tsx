import { motion } from "framer-motion";
import { Service } from "../types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="service-card"
    >
      <div className="text-secondary mb-4 text-4xl" dangerouslySetInnerHTML={{ __html: service.icon }}></div>
      <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-secondary font-semibold text-xl">{service.price}</p>
    </motion.div>
  );
}
