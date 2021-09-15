import React from 'react';
import Link from 'next/link';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <header>
      <nav>
        <h1>Natours PH</h1>
        <div>
          <ul>
            <li>Zomer</li>
            <li>Zomer</li>
            <li>Zomer</li>
            <li>Zomer</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
