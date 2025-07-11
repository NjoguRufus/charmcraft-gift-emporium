import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                {/* Gift icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0V7a2 2 0 00-2-2h-3.28a2 2 0 01-1.42-.59l-.3-.3a2 2 0 00-2.83 0l-.3.3A2 2 0 017.28 5H4a2 2 0 00-2 2v5m16 0H4" /></svg>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Charm Craft
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Creating memorable moments with thoughtfully designed gift baskets. 
              Perfect for celebrations, appreciation, or just because.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/custom" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Baskets
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Romance" className="text-muted-foreground hover:text-primary transition-colors">
                  Romance
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Baby" className="text-muted-foreground hover:text-primary transition-colors">
                  Baby
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Food & Beverage" className="text-muted-foreground hover:text-primary transition-colors">
                  Food & Beverage
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Wellness" className="text-muted-foreground hover:text-primary transition-colors">
                  Wellness
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Birthday" className="text-muted-foreground hover:text-primary transition-colors">
                  Birthday
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@charmcraft.co.ke</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+254 712 345678</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  12 Riverside Drive<br />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CharmCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/returns" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;