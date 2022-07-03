import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="p-8 pb-12 text-white/70">
      <h3 className="text-xl text-white/90 mb-8 font-semibold border-b border-b-white/20 pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b border-b-white/10'} pb-5 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
