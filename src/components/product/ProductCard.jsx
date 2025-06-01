import { useState } from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ image, discount, price, name, rating, reviews }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleLike = (e) => {
    e.preventDefault(); // 부모 요소 클릭 이벤트 방지
    setIsFavorite(!isFavorite);
  };
    
    return (
    <div style={{ 
      position: 'relative',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {/* 이미지 컨테이너 */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '200px',
        backgroundColor: '#e8dcc0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* 실제 이미지 */}
        <img 
          src={image} 
          alt={name}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}
        />

        {/* 하트 아이콘 - 두 번째 코드 스타일로 변경 */}
        <button
          onClick={toggleLike}
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <Heart
            size={18}
            fill={isFavorite ? '#ff6b6b' : 'none'}
            color={isFavorite ? '#ff6b6b' : '#666'}
          />
        </button>

      </div>

      {/* 상품 정보 */}
      <div style={{ padding: '16px' }}>
        <h3 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '16px',
          fontWeight: '500',
          color: '#333'
        }}>
          {name}
        </h3>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          marginBottom: '8px'
        }}>
          <span style={{ 
            color: '#e53e3e', 
            fontSize: '14px',
            fontWeight: '600'
          }}>
            {discount}%
          </span>
          <span style={{ 
            fontSize: '16px',
            fontWeight: '600',
            color: '#333'
          }}>
            {price}
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px'
        }}>
          <span style={{ color: '#ffa500', fontSize: '14px' }}>★</span>
          <span style={{ fontSize: '14px', color: '#666' }}>
            {rating}({reviews || 0})
          </span>
        </div>
      </div>
    </div>
  );
  };
  
  export default ProductCard;