// src/components/Main/Header/CategoryNav.jsx
import React from 'react';
import {
  Nav,
  NavLink,
  HamburgerWrapper,
  MegaMenu,
  MegaMenuItem,
  SubMenu,
  SubMenuItem,
  StyledLink,
} from '../../../styles/main/HeaderStyle';
import { TiThMenu } from 'react-icons/ti';
import { categories } from '../../../data/category';


const CategoryNav = () => {


  return (
    <Nav>
      <HamburgerWrapper>
        <TiThMenu size={30} />
        <MegaMenu>
          {categories.map(cat => (
            <MegaMenuItem key={cat.name}>
              {/* 상위 메뉴 */}
              <StyledLink to={cat.path}>
                {cat.name}
              </StyledLink>

              {/* 하위 메뉴 */}
              <SubMenu>
                {cat.sub.map(item => (
                  <SubMenuItem key={item.name}>
                    <StyledLink to={item.path}>
                      {item.name}
                    </StyledLink>
                  </SubMenuItem>
                ))}
              </SubMenu>
            </MegaMenuItem>
          ))}
        </MegaMenu>
      </HamburgerWrapper>


      {/* 네비게이션 중앙 정렬 */}
      <div style={{ margin: '0 auto', display: 'flex', gap: '24px' }}>
        {categories.map(cat => (
          <NavLink key={cat.path} to={cat.path}>
            {cat.name}
          </NavLink>
        ))}
      </div>
    </Nav>
  );
};

export default CategoryNav;
