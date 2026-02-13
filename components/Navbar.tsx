import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Home Remodeling', href: '/services/remodeling' },
        { name: 'HVAC Solutions', href: '/services/hvac' },
        { name: 'Plumbing', href: '/services/plumbing' },
        { name: 'Electrical', href: '/services/electrical' },
        { name: 'Energy Assessment', href: '/services/energy' },
        { name: 'Maintenance', href: '/services/maintenance' },
      ]
    },
    {
      name: 'Locations',
      href: '/locations',
      subLinks: [
        { name: 'Newton, MA', href: '/locations/newton' },
        { name: 'View All Areas', href: '/locations' },
      ]
    },
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md py-2'
        : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
        }`}
    >
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 bg-brand-navy rounded-sm flex items-center justify-center text-white font-bold shadow-lg">
              <Zap size={20} className="text-brand-gold" fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-serif font-black tracking-tight text-brand-navy">
                A.W. PUMA
              </span>
              <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Home Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="flex items-center gap-1 text-sm font-semibold text-brand-gray hover:text-brand-gold transition-colors uppercase tracking-wide py-2"
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-sm py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border-t-4 border-brand-gold">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className="block px-6 py-2 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors font-medium"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:6175550123" className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors">
              <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center border border-gray-200">
                <IconPhone size={14} />
              </div>
              <span>(617) 555-0123</span>
            </a>
            <Link to="/contact">
              <Button size="sm" variant="primary">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-navy p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl px-4 py-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 pb-2">
              <div className="flex items-center justify-between">
                <Link
                  to={link.href}
                  className="text-lg font-bold text-brand-navy hover:text-brand-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className="p-2 text-brand-gray"
                  >
                    <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {link.subLinks && activeDropdown === link.name && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-brand-light ml-2">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.href}
                      className="block text-brand-gray hover:text-brand-gold text-sm py-1 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="tel:6175550123" className="flex items-center gap-2 font-bold text-brand-navy py-2 pt-4">
            <IconPhone size={18} className="text-brand-gold" />
            (617) 555-0123
          </a>
          <Button className="w-full" variant="primary">
            Book Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

const IconPhone = ({ size, className }: { size?: number, className?: string }) => <Phone size={size} className={className} />;