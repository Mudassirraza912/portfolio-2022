import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import CustomLink from './CustomLink';
import Image from 'next/image';
import avatar from 'public/favicon/mudassiravatar.png';

const links = [
  { href: '/', label: 'Route' },
  { href: '/', label: 'Route' },
];

export default function Nav() {
  const [isMounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const button = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');

    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }, []);
  const renderThemeChanger = () => {
    if (!isMounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme == 'dark') {
      return (
        <SunIcon
          className='w-7 h-7'
          role={'button'}
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-7 h-7'
          role={'button'}
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  // const button = document.querySelector('#menu-button');
  // const menu = document.querySelector('#menu');

  // button.addEventListener('click', () => {
  //   menu.classList.toggle('hidden');
  // });
  return (
    // <nav className='bg-primary dark:bg-dark'>
    //   <ul className='flex items-center justify-between px-8 py-4'>
    //     <li>
    //       <CustomLink href='/'>Home</CustomLink>
    //     </li>
    // <ul className='flex items-center justify-between space-x-4'>
    //   {renderThemeChanger()}
    // </ul>
    //   </ul>
    // </nav>
    <nav
      class='
      flex flex-wrap
      items-center
      justify-between
      w-full
      py-4
      md:py-0
      px-4
      text-lg text-gray-700
      bg-primary 
      dark:bg-dark
    '
    >
      <div>
        <Link href='/'>
          <Image src={avatar} alt='mudassir-avatar' width={150} height={150} />
        </Link>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='menu-button'
        class='h-6 w-6 cursor-pointer md:hidden block'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      </svg>

      <div class='hidden w-full md:flex md:items-center md:w-auto' id='menu'>
        <ul
          class='
          pt-4
          text-base text-gray-700
          md:flex
          md:justify-between 
          md:pt-0'
        >
          <li>
            <a
              class='md:p-4 text-black dark:text-white py-2 block hover:text-purple-400'
              href='#'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              class='md:p-4 text-black dark:text-white py-2 block hover:text-purple-400'
              href='#'
            >
              Work Experiences
            </a>
          </li>
          <li>
            <a
              class='md:p-4 text-black dark:text-white py-2 block hover:text-purple-400'
              href='#'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              class='md:p-4 text-black dark:text-white py-2 block hover:text-purple-400'
              href='#'
            >
              Open Source
            </a>
          </li>
          <li className='md:p-4 text-black dark:text-white py-2 block'>
            {renderThemeChanger()}
          </li>
        </ul>
      </div>
    </nav>
  );
}
