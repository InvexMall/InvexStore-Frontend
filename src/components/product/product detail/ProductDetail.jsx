import React, { useState } from 'react';
import { Star, Truck, ChevronDown } from 'lucide-react';

const ProductDetail = ({ productData, className = "" }) => {
  const [selectedColor, setSelectedColor] = useState(productData?.colors?.[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(productData?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(0);

  // 기본값 설정 (데이터가 없을 때)
  const defaultData = {
    title: '상품명을 불러오는 중...',
    reviewCount: 0,
    rating: 0,
    originalPrice: 0,
    discountPrice: 0,
    discountRate: 0,
    colors: [],
    sizes: [],
    shippingDate: '배송일 확인 중...',
    shippingTime: ''
  };

  const data = { ...defaultData, ...productData };

  // 할인율 계산
  const discountRate = data.originalPrice > 0 
    ? Math.round(((data.originalPrice - data.discountPrice) / data.originalPrice) * 100)
    : data.discountRate;

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(0, quantity + change));
  };

  // 총 결제금액 계산
  const totalPrice = quantity * data.discountPrice;

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '4%',
      width: '100%',
      boxSizing: 'border-box'
    }} className={className}>
      
      {/* Product Title */}
      <h1 style={{
        fontSize: 'clamp(16px, 4vw, 20px)', // 반응형 폰트 크기
        fontWeight: '500',
        marginBottom: '2%',
        lineHeight: '1.4',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
      }}>
        {data.title}
      </h1>

      {/* Rating */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '4%' 
      }}>
        <div style={{ display: 'flex' }}>
          {[...Array(5)].map((_, i) => {
            const isFilled = i < Math.floor(data.rating);
            const isHalfFilled = i === Math.floor(data.rating) && data.rating % 1 !== 0;
            
            return (
              <div key={i} style={{ position: 'relative' }}>
                <Star style={{
                  width: 'clamp(14px, 2.5vw, 16px)',
                  height: 'clamp(14px, 2.5vw, 16px)',
                  color: isFilled || isHalfFilled ? '#f472b6' : '#d1d5db'
                }} />
                {isFilled && (
                  <Star style={{
                    width: 'clamp(14px, 2.5vw, 16px)',
                    height: 'clamp(14px, 2.5vw, 16px)',
                    color: '#f472b6',
                    fill: 'currentColor',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }} />
                )}
              </div>
            );
          })}
        </div>
        <span style={{
          marginLeft: '2%',
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          color: '#6b7280'
        }}>
          {data.reviewCount}건 리뷰 〉
        </span>
      </div>

      {/* Price */}
      <div style={{ marginBottom: '6%' }}>
        {data.originalPrice > data.discountPrice && (
          <div style={{
            fontSize: 'clamp(12px, 2.5vw, 14px)',
            color: '#9ca3af',
            textDecoration: 'line-through'
          }}>
            {data.originalPrice.toLocaleString()}원
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {discountRate > 0 && (
            <span style={{
              color: '#ef4444',
              fontWeight: '500',
              marginRight: '2%',
              fontSize: 'clamp(16px, 3.5vw, 18px)'
            }}>
              {discountRate}%
            </span>
          )}
          <span style={{
            fontSize: 'clamp(18px, 4vw, 24px)',
            fontWeight: 'bold'
          }}>
            {data.discountPrice.toLocaleString()}원
          </span>
        </div>
      </div>

      {/* Shipping Info */}
      <div style={{ marginBottom: '6%' }}>
        <div style={{
          fontSize: 'clamp(12px, 2.8vw, 14px)',
          fontWeight: '500',
          marginBottom: '2%'
        }}>
          배송정보
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          color: '#6b7280',
          marginBottom: '2%'
        }}>
          <Truck style={{
            width: 'clamp(14px, 2.5vw, 16px)',
            height: 'clamp(14px, 2.5vw, 16px)',
            marginRight: '2%'
          }} />
          <span style={{ color: '#7c3aed' }}>{data.shippingDate}</span>
        </div>
        {data.shippingTime && (
          <div style={{
            fontSize: 'clamp(10px, 2vw, 12px)',
            color: '#6b7280',
            marginBottom: '3%'
          }}>
            {data.shippingTime}
          </div>
        )}
        <button style={{
          fontSize: 'clamp(10px, 2vw, 12px)',
          color: '#6b7280',
          border: '1px solid #d1d5db',
          padding: '1% 3%',
          borderRadius: '4px',
          backgroundColor: 'transparent'
        }}>
          오늘출발 가능 제고 안내 〉
        </button>
      </div>

      {/* Color Selection */}
      {data.colors && data.colors.length > 0 && (
        <div style={{ marginBottom: '6%' }}>
          <div style={{
            fontSize: 'clamp(12px, 2.8vw, 14px)',
            fontWeight: '500',
            marginBottom: '3%'
          }}>
            색상
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2%',
            marginBottom: '3%'
          }}>
            {data.colors.map((color, index) => (
              <button
                key={index}
                style={{
                  aspectRatio: '1',
                  borderRadius: '4px',
                  border: selectedColor === color.name ? '2px solid #f472b6' : '2px solid #e5e7eb',
                  backgroundColor: color.bgColor ? undefined : '#f3f4f6'
                }}
                className={color.bgColor}
                onClick={() => setSelectedColor(color.name)}
                title={color.name}
              />
            ))}
          </div>
          <div style={{
            fontSize: 'clamp(10px, 2vw, 12px)',
            color: '#ec4899'
          }}>
            {selectedColor}
          </div>
          <div style={{
            fontSize: 'clamp(10px, 2vw, 12px)',
            color: '#6b7280',
            marginTop: '1%'
          }}>
            색상을 먼저 선택해주세요.
          </div>
        </div>
      )}

      {/* Size Selection */}
      {data.sizes && data.sizes.length > 0 && (
        <div style={{ marginBottom: '6%' }}>
          <div style={{
            fontSize: 'clamp(12px, 2.8vw, 14px)',
            fontWeight: '500',
            marginBottom: '3%'
          }}>
            사이즈
          </div>
          <div style={{
            display: 'flex',
            gap: '2%',
            marginBottom: '3%',
            flexWrap: 'wrap'
          }}>
            {data.sizes.map((size) => (
              <button
                key={size}
                style={{
                  padding: '2% 4%',
                  border: selectedSize === size ? '1px solid #fb923c' : '1px solid #e5e7eb',
                  borderRadius: '4px',
                  fontSize: 'clamp(11px, 2.2vw, 13px)',
                  backgroundColor: selectedSize === size ? '#fff7ed' : 'white',
                  color: selectedSize === size ? '#ea580c' : '#374151',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => setSelectedSize(size)}
              >
                <Truck style={{
                  width: 'clamp(10px, 2vw, 12px)',
                  height: 'clamp(10px, 2vw, 12px)',
                  marginRight: '1%'
                }} />
                {size} ONE SIZE
              </button>
            ))}
          </div>
          <div style={{
            fontSize: 'clamp(10px, 2vw, 12px)',
            color: '#ef4444',
            border: '1px solid #fecaca',
            backgroundColor: '#fef2f2',
            padding: '1% 2%',
            borderRadius: '4px',
            display: 'inline-block'
          }}>
            NEW! 실측 사이즈 안내
          </div>
        </div>
      )}

      <hr style={{ margin: '6% 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

      {/* Discount Notice */}
      <div style={{ textAlign: 'center', marginBottom: '4%' }}>
        <div style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
          <span style={{ color: '#ef4444' }}>하나더</span> 
          <span style={{ color: '#374151' }}> 구매하시면 총 </span>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>
            {data.discountPrice.toLocaleString()}원
          </span>
          <span style={{ color: '#374151' }}>이 할인됩니다</span>
        </div>
        <div style={{
          fontSize: 'clamp(10px, 2vw, 12px)',
          color: '#6b7280'
        }}>
          2개이상, 네이버페이 결제시 하나더할인 적용불가
        </div>
      </div>

      {/* Quantity and Total Price */}
      <div style={{ marginBottom: '6%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '4%'
        }}>
          <span style={{
            fontSize: 'clamp(12px, 2.8vw, 14px)',
            fontWeight: '500'
          }}>
            총 결제금액
          </span>
          <span style={{
            fontSize: 'clamp(16px, 3.5vw, 20px)',
            fontWeight: 'bold',
            color: '#ef4444'
          }}>
            {totalPrice.toLocaleString()}원
          </span>
        </div>
        
        {/* Quantity Counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '4%'
        }}>
          <button 
            onClick={() => handleQuantityChange(-1)}
            style={{
              width: 'clamp(35px, 8vw, 40px)',
              height: 'clamp(35px, 8vw, 40px)',
              border: '1px solid #d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(16px, 3vw, 18px)',
              fontWeight: '500',
              backgroundColor: 'white'
            }}
          >
            -
          </button>
          <span style={{
            width: 'clamp(50px, 12vw, 64px)',
            height: 'clamp(35px, 8vw, 40px)',
            borderTop: '1px solid #d1d5db',
            borderBottom: '1px solid #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(12px, 2.5vw, 14px)'
          }}>
            {quantity}
          </span>
          <button 
            onClick={() => handleQuantityChange(1)}
            style={{
              width: 'clamp(35px, 8vw, 40px)',
              height: 'clamp(35px, 8vw, 40px)',
              border: '1px solid #d1d5db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(16px, 3vw, 18px)',
              fontWeight: '500',
              backgroundColor: 'white'
            }}
          >
            +
          </button>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '3%' }}>
          <button 
            style={{
              flex: 1,
              backgroundColor: '#374151',
              color: 'white',
              padding: '3% 0',
              textAlign: 'center',
              fontWeight: '500',
              borderRadius: '4px',
              border: 'none',
              fontSize: 'clamp(14px, 3vw, 16px)'
            }}
            onClick={() => {
              console.log('장바구니 추가:', {
                productId: data.id,
                color: selectedColor,
                size: selectedSize,
                quantity: quantity
              });
            }}
          >
            장바구니
          </button>
          <button 
            style={{
              flex: 1,
              backgroundColor: '#f472b6',
              color: 'white',
              padding: '3% 0',
              textAlign: 'center',
              fontWeight: '500',
              borderRadius: '4px',
              border: 'none',
              fontSize: 'clamp(14px, 3vw, 16px)'
            }}
            onClick={() => {
              console.log('구매하기:', {
                productId: data.id,
                color: selectedColor,
                size: selectedSize,
                quantity: quantity,
                totalPrice: totalPrice
              });
            }}
          >
            구매하기
          </button>
        </div>
      </div>

      {/* Wishlist */}
      <div style={{ textAlign: 'right' }}>
        <button style={{
          color: '#9ca3af',
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          backgroundColor: 'transparent',
          border: 'none'
        }}>
          W<br />
          <span style={{ fontSize: 'clamp(10px, 2vw, 12px)' }}>(찜)</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;