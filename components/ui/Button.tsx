import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";
  
  const variants = {
    primary: "bg-brand-gold text-white hover:bg-brand-goldhover border-2 border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5",
    navy: "bg-brand-navy text-white hover:bg-brand-dark border-2 border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-brand-navy border-2 border-gray-200 hover:border-brand-gold hover:text-brand-gold hover:bg-gray-50",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-navy",
    ghost: "text-brand-gray hover:text-brand-navy hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};