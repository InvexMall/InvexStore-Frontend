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
  
  export default ProductCard;