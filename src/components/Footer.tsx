import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading italic text-2xl text-gold mb-3">Grandmama's Café</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Where every meal feels like home. Authentic flavours crafted with love, in the heart of Juhu, Mumbai.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "About", to: "/about" },
              ].map(l => (
                <Link key={l.label} to={l.to} className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <a href="tel:+918591078528" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={14} /> +91 85910 78528
              </a>
              <a href="mailto:grandmamascare@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={14} /> grandmamascare@gmail.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Juhu, Mumbai – 400049
              </span>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-heading text-lg text-gold mb-4">Opening Hours</h4>
            <div className="text-sm text-primary-foreground/70 space-y-1 mb-4">
              <p>Dine-In: Mon–Sun, 11 AM – 11 PM</p>
              <p>Delivery: 10 AM – 11:30 PM</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © 2025 Grandmama's Café. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
