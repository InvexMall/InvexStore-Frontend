import React from 'react';
import { Nav, NavLink } from '../../../styles/HeaderStyle'

//기본 구성 카테고리
const categories = [
  { name: '인기 상품', path: '/popular' },
  { name: '신상품', path: '/new' },
  { name: '아우터', path: '/outer' },
  { name: '상의', path: '/top' },
  { name: '하의', path: '/bottom' },
  { name: '액세서리', path: '/acc' },
  { name: '언더웨어', path: '/under' },
  { name: '신발', path: '/shoe'},
];

const CategoryNav = () => (
  <Nav>
    {categories.map(cat => (
      <NavLink key={cat.path} to={cat.path}>
        {cat.name}
      </NavLink>
    ))}
  </Nav>
);

export default CategoryNav;

