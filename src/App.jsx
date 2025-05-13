import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function LandingPage() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Navbar />
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <GallerySection />
                <TestimonialsSection />
                <ContactSection />
                <Footer />
                <BackToTop />
            </motion.div>
        </AnimatePresence>
    );
}

function Router() {
    return (
        <Switch>
            <Route path="/" component={LandingPage} />
        </Switch>
    );
}

function App() {
    useEffect(() => {

        document.title = "ELITE CUTS | Professional Barber Shop";
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Router />
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
