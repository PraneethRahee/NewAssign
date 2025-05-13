import { SectionHeading } from "./ui/section-heading";
import TestimonialCard from "../components/TestimonialCard";
import { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The best barber shop in town! Josh always knows exactly how to cut my hair, even when I'm not sure what I want. Highly recommended!",
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: "2",
    quote: "I've been coming to Elite Cuts for over 3 years now. The atmosphere is great, the barbers are skilled, and the complimentary beverages are a nice touch!",
    name: "David Rodriguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: "3",
    quote: "Finally found a place that knows how to properly style my beard! The hot towel treatment is amazing. Worth every penny for the quality service.",
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 4.5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Client Testimonials"
          description="Read what our satisfied clients have to say about their experience."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
