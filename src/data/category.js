export const categories = [
    {
      name: '인기 상품',
      path: '/popular',
      sub: [
        { name: '월간 베스트',     path: '/popular/monthbest' },
        { name: '년간 베스트',     path: '/popular/yearbest' },
      ],
    },
    {
      name: '신상품',
      path: '/new',
      sub: [
        { name: '오늘의 신상', path: '/new/today' },
        { name: '이달의 신상', path: '/new/month' },
      ],
    },
    {
        name: '아우터',
        path: '/outer',
        sub: [
          { name: '패딩', path: '/outer/padding' },
          { name: '코트', path: '/outer/coat' },
          { name: '자켓', path: '/outer/jacket' },
        ],
    },
    {
        name: '상의',
        path: '/top',
        sub: [
          { name: '티셔츠', path: '/top/tshirts' },
          { name: '맨투맨', path: '/top/mtm' },
          { name: '셔츠', path: '/top/shirts' },
        ],
    },
    {
        name: '하의',
        path: '/bottom',
        sub: [
          { name: '청바지', path: '/bottom/jean' },
          { name: '반바지', path: '/bottom/shortbottom' },
          { name: '치마', path: '/bottom/skirt' },
        ],
    },
    
  ];