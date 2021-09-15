import React from 'react';
import Link from 'next/link';
import { StyledNav, StyledLinkList } from '@styles/NavStyles';
import { navLinks } from '../configs/StaticData';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <StyledNav>
      <nav>
        <a href='#'>
          <h1>Natours</h1>
        </a>

        <StyledLinkList>
          {navLinks.map((item, i) => {
            const { name, link } = item;
            return (
              <li key={i}>
                <Link href={link}>
                  <a className='link'>{name}</a>
                </Link>
              </li>
            );
          })}
        </StyledLinkList>
      </nav>
    </StyledNav>
  );
};

export default Nav;
