import React from 'react';
import ProductCard from './ProductCard';
// import { products } from '../../data/product/product';
import { useProductdata } from '../../hooks/useProductdata'


export default function ProductCardGrid() {
  const { products, loading, error } = useProductdata();

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px'
      }}>
        {products.map((product) => (
          <div z
            key={product.id} 
            style={{ 
              marginBottom: '30px',
              border: '1px solid #eee'
            }}
          >
            <ProductCard 
              image={product.image}
              name={product.productname}
              price={product.productprice}
              discount={product.discountrate}
              rating={product.rating}
              reviews={product.reviews}
            />
          </div>
        ))}
      </div>
    </div>
  );
}