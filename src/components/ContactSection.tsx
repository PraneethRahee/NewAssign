import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/section-heading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SocialLink } from "../types";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Slack } from "lucide-react";

const socialLinks: SocialLink[] = [
  {
    id: "1",
    platform: "Instagram",
    icon: "Instagram",
    url: "#"
  },
  {
    id: "2",
    platform: "Facebook",
    icon: "Facebook",
    url: "#"
  },
  {
    id: "3",
    platform: "Twitter",
    icon: "Twitter",
    url: "#"
  },
  {
    id: "4",
    platform: "Slack",
    icon: "Slack",
    url: "#"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, we would send this data to a backend
    // For this frontend-only implementation, we'll just log it
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "Instagram": return <Instagram className="h-6 w-6" />;
      case "Facebook": return <Facebook className="h-6 w-6" />;
      case "Twitter": return <Twitter className="h-6 w-6" />;
      case "Slack": return <Slack className="h-6 w-6" />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Book Your Appointment"
          description="Schedule your next visit or get in touch with us for any questions."
          titleClassName="text-secondary"
          descriptionClassName="text-white"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="text-secondary mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p>123 Main Street, Downtown<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-secondary mr-4 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-secondary mr-4 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>info@elitecuts.com</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-4">Opening Hours</h3>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a 
                  key={link.id}
                  href={link.url} 
                  className="text-white hover:text-secondary transition-all"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white text-dark p-8 rounded shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Request Appointment</h3>
              
              <div className="mb-4">
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-secondary text-gray-700 placeholder:text-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-secondary text-gray-700 placeholder:text-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2">Phone Number</Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-secondary text-gray-700 placeholder:text-gray-400"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="service" className="text-gray-700 font-medium mb-2">Select Service</Label>
                <Select onValueChange={handleSelectChange} value={formData.service}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-secondary text-gray-700 placeholder:text-gray-400">
                    <SelectValue placeholder="Choose a service"  className="text-gray-700"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classic-cut">Classic Cut</SelectItem>
                    <SelectItem value="shave-trim">Shave & Trim</SelectItem>
                    <SelectItem value="style-color">Style & Color</SelectItem>
                    <SelectItem value="kids-cut">Kids Cut</SelectItem>
                    <SelectItem value="luxe-package">Luxe Package</SelectItem>
                    <SelectItem value="beard-styling">Beard Styling</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="date" className="text-gray-700 font-medium mb-2">Preferred Date</Label>
                <Input 
                  type="date" 
                  id="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-secondary text-gray-700 placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2">Special Requests</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-secondary text-gray-700 placeholder:text-gray-400"
                  placeholder="Any special requests or notes..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-secondary hover:bg-accent text-white font-medium py-3 px-8 rounded-sm">
                Book Appointment
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
