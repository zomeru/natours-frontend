import React from 'react';
import Link from 'next/link';

interface LinkItemProps {
  path: string;
  mrSize: number;
  text: string;
}

const LinkItem = ({ path, mrSize, text }) => {
  return (
    <li className={`mr-${mrSize}`}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <header className='h-16 px-10 bg-green-default'>
      <nav className='flex items-center justify-between h-full'>
        <h1>Natours PH</h1>
        <div>
          <ul className='flex text-white'>
            <LinkItem path='#' mrSize={10} text='Home' />
            <LinkItem path='#' mrSize={10} text='Tours' />
            <LinkItem path='#' mrSize={10} text='Contact' />
            <LinkItem path='#' mrSize={10} text='Log in' />
            <LinkItem path='#' mrSize={0} text='Sign ' />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
