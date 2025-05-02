import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/product/product';

export default function ProductCardGrid() {
  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
      }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{ 
              marginBottom: '30px',
              border: '1px solid #eee'
            }}
          >
            <ProductCard 
              image={product.image}
              name={product.name}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
              reviews={product.reviews}
            />
          </div>
        ))}
      </div>
    </div>
  );
}