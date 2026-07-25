import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = 'inline-flex items-center gap-2 rounded-xl border font-medium transition focus:outline-none focus:ring-4 focus:ring-blue-200';
  const variants = {
    primary: 'border-blue-700 bg-blue-600 px-5 py-2 text-white shadow-sm hover:border-blue-900 hover:bg-blue-700',
    secondary: 'border-slate-300 bg-white px-4 py-2 text-gray-800 hover:border-slate-400 hover:shadow',
    ghost: 'border-transparent bg-transparent px-3 py-1 text-blue-600 hover:border-blue-200 hover:bg-blue-50',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
