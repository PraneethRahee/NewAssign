import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold font-heading text-secondary">
              ELITE CUTS
            </Link>
            <p className="mt-2 text-gray-400">Premium Barber Experience Since 2010</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© {new Date().getFullYear()} Elite Cuts Barbers. All rights reserved.</p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-secondary transition-all">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
