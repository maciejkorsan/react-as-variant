import React from 'react';

const Heading = ({ as, variant, children }) => {
  const TagName = as || 'h1';

  const variants = {
    default: 'font-bold mb-2',
    primary: 'text-4xl font-bold mb-2',
    secondary: 'text-3xl font-bold mb-2',
    tertiary: 'text-2xl font-bold mb-2',
  };

  return (
    <TagName className={variants[variant] || variants['default']}>
      {children}
    </TagName>
  );
};

export default Heading;
