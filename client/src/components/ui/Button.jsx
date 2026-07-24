import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = 'inline-flex items-center gap-2 font-medium rounded-lg transition-transform focus:outline-none';
  const variants = {
    primary: 'bg-blue-600 text-white px-5 py-2 hover:scale-[1.02] shadow-sm',
    secondary: 'bg-white text-gray-800 border px-4 py-2 hover:shadow',
    ghost: 'bg-transparent text-blue-600 px-3 py-1',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
