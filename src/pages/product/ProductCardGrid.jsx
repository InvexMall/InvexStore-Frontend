import { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ image, discount, price, name, rating, reviews }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="relative" style={{ padding: '0', margin: '0' }}>
      {/* 상품 이미지 컨테이너 */}
      <div 
        className="relative" 
        style={{ 
          width: '100%', 
          backgroundColor: '#f5f0e5',
          aspectRatio: '1/1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src={image} 
          alt=""
          style={{ 
            maxWidth: '80%', 
            maxHeight: '80%', 
            objectFit: 'contain' 
          }}
          onError={(e) => {
            e.target.onerror = null;
            // 대체 이미지 대신 빈 이미지 사용
            e.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
          }}
        />
        
        {/* 입고알림 버튼 */}
        <div className="absolute top-2 right-2">
          <button className="bg-white text-black text-xs px-2 py-1 rounded-sm border border-gray-300">입고알림</button>
        </div>
      </div>
      
      {/* 상품 정보 - 아래 */}
      <div className="mt-2">
        <div className="mb-1">
          <span className="text-sm">{name}</span>
        </div>
        
        <div className="flex items-center">
          {discount && (
            <span className="text-pink-500 font-medium mr-1">{discount}%</span>
          )}
          <span className="font-bold">{price.toLocaleString()}원</span>
        </div>
        
        {/* 별점 및 리뷰 수 */}
        <div className="flex items-center mt-1 text-xs text-gray-700">
          <span>★{rating}</span>
          <span className="ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

// // 상품 데이터
// const products = [
//   {
//     id: 1,
//     name: "푸라롤팬던 원피스",
//     price: 17910,
//     originalPrice: 39800,
//     discount: 55,
//     image: "/images/product1.jpg",
//     rating: 4.8,
//     reviews: 1328
//   },
//   {
//     id: 2,
//     name: "플라워 패턴 원피스",
//     price: 25590,
//     originalPrice: 42650,
//     discount: 40,
//     image: "/images/product2.jpg",
//     rating: 4.6,
//     reviews: 1702
//   },
//   {
//     id: 3,
//     name: "[🖤]별자수 미니원피스",
//     price: 17910,
//     originalPrice: 39800,
//     discount: 55,
//     image: "/images/product3.jpg",
//     rating: 4.8,
//     reviews: 1328
//   },
//   {
//     id: 1,
//     name: "푸라롤팬던 원피스",
//     price: 17910,
//     originalPrice: 39800,
//     discount: 55,
//     image: "/images/product1.jpg",
//     rating: 4.8,
//     reviews: 1328
//   },
//   {
//     id: 2,
//     name: "플라워 패턴 원피스",
//     price: 25590,
//     originalPrice: 42650,
//     discount: 40,
//     image: "/images/product2.jpg",
//     rating: 4.6,
//     reviews: 1702
//   },
//   {
//     id: 3,
//     name: "[🖤]별자수 미니원피스",
//     price: 17910,
//     originalPrice: 39800,
//     discount: 55,
//     image: "/images/product3.jpg",
//     rating: 4.8,
//     reviews: 1328
//   }
// ];

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