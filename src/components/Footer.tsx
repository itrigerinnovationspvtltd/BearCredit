import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#3d2817] to-[#2d1f10] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src="/bear-logo.png"
                  alt="Bear Credit Logo"
                  className={`w-full h-full object-contain transition-all `}
                />
              </div>
              <div className="text-2xl font-black text-white">
                Bear <span className="text-primary">Credit</span>
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Take control of your credit and build a better financial future
              with our expert guidance and personalized consultation services.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+18173076564"
                className="flex items-center text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-semibold">+1 (817) 307-6564</span>
              </a>
              <a
                href="mailto:support@bearcredit.net"
                className="flex items-center text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-semibold">support@bearcredit.net</span>
              </a>
              <div className="flex items-center text-white/80">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                  <MapPin size={18} />
                </div>
                <span className="font-semibold">
                Mansfield, TX 76063
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-white transition-colors font-semibold hover:translate-x-1 inline-block transform transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li className="font-semibold">Credit Report Review</li>
              <li className="font-semibold">Dispute Assistance</li>
              <li className="font-semibold">Credit Building Guidance</li>
              <li className="font-semibold">Financial Consultation</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/80 font-semibold space-y-2">
              <p>&copy; 2025 Bear Credit. All rights reserved.</p>
              <p className="text-sm">
                Developed by{" "}
                <a
                  href="https://itrigerinnovations.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Itriger Innovations Private Limited
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80 font-semibold">Follow Us:</span>
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
