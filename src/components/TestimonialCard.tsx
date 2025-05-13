import { motion } from "framer-motion";
import { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white p-8 rounded shadow-md relative"
    >
      <div className="text-secondary text-5xl absolute -top-4 left-4 opacity-50">"</div>
      <p className="relative z-10 text-gray-600 mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
          <img src={testimonial.image} alt={`${testimonial.name} photo`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <div className="text-secondary">
            {Array(5).fill(0).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill={i < testimonial.rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
