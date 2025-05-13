import { SectionHeading } from "./ui/section-heading";
import ServiceCard from "../components/ServiceCard";
import { Service } from "../types";

const services: Service[] = [
  {
    id: "1",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>',
    title: "Classic Cut",
    description: "Traditional barber cut with expert precision and attention to detail.",
    price: "$35"
  },
  {
    id: "2",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-razor"><path d="M16 8v12a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V8"/><path d="M3 8h18"/><path d="M7 5v3"/><path d="M17 5v3"/><path d="M12 5V2c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v3"/><path d="M12 5v3"/><path d="M17 5V2c0-.6.4-1 1-1h6"/></svg>',
    title: "Shave & Trim",
    description: "Professional hot towel shave with straight razor for the smoothest finish.",
    price: "$30"
  },
  {
    id: "3",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    title: "Style & Color",
    description: "Full styling service with optional color treatments to transform your look.",
    price: "$55+"
  },
  {
    id: "4",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 5 6.3"/><path d="M14.5 4a3.5 3.5 0 0 0-5 0"/></svg>',
    title: "Kids Cut",
    description: "Gentle and patient service for our younger clients in a friendly environment.",
    price: "$25"
  },
  {
    id: "5",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wine"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 10v12"/><path d="M12 2c0 3 2 3 2 5s-1 2-2 2-2 0-2-2 2-2 2-5Z"/></svg>',
    title: "Luxe Package",
    description: "Premium service including cut, shave, facial treatment and complimentary beverage.",
    price: "$85"
  },
  {
    id: "6",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    title: "Beard Styling",
    description: "Expert beard shaping, trimming and styling to complement your features.",
    price: "$25"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          description="Discover our range of professional barbering services designed to keep you looking your best."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
