import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services/remodeling' }, // Temporarily linking to the one service page we have
    { name: 'Process', href: '/#process' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'FAQ', href: '/#faq' },
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
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-gray hover:text-brand-gold transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
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
            <Button size="sm" variant="primary">
              Get Quote
            </Button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-brand-navy hover:text-brand-gold block border-b border-gray-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:6175550123" className="flex items-center gap-2 font-bold text-brand-navy py-2">
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