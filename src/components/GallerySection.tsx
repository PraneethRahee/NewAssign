import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { Button } from "./ui/button";
import { GalleryItem } from "../types";

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Modern fade haircut"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Classic pompadour hairstyle"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Professional beard styling"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Textured crop haircut"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Modern quiff hairstyle"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Traditional straight razor shave"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Work"
          description="Browse through our portfolio showcasing our finest haircuts and styles."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-secondary hover:bg-accent text-white font-medium py-3 px-8 rounded-sm">
            View More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
