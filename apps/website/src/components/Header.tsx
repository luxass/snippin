import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { trpc } from '@lib/trpc';

import ProfileDropdown from './ProfileDropdown';

export default function Header() {
  const { data: session } = trpc.useQuery(['session.getSession']);

  return (
    <header>
      <Disclosure as="nav" className="bg-[#295270] bg-opacity-40 backdrop-blur">
        {({ open }) => (
          <>
            <div className="max-w-6xl w-full mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex-1 flex items-center justify-between">
                <Link href="/" passHref>
                  <a>
                    <Image src="/logo.svg" alt="logo" width="24" height="24" />
                  </a>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="/snippets" passHref>
                      <a className="text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm leading-6 font-medium">
                        Snippets
                      </a>
                    </Link>
                    {session && (
                      <>
                        <Link href="/dashboard" passHref>
                          <a className="text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm leading-6 font-medium">
                            Dashboard
                          </a>
                        </Link>
                        <ProfileDropdown session={session} />
                      </>
                    )}
                    {!session && (
                      <Link href="/auth/login" passHref>
                        <a className="text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white px-3 py-2 rounded-md text-sm leading-6 font-medium">
                          Login
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                {session && <ProfileDropdown session={session} />}
                <Disclosure.Button
                  className={clsx(
                    {
                      'ml-2': session
                    },
                    'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  )}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/snippets" passHref>
                  <Disclosure.Button
                    as="a"
                    className="text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Snippets
                  </Disclosure.Button>
                </Link>
                {session && (
                  <Link href="/dashboard" passHref>
                    <Disclosure.Button
                      as="a"
                      className="text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Dashboard
                    </Disclosure.Button>
                  </Link>
                )}
                {!session && (
                  <Link href="/auth/login" passHref>
                    <Disclosure.Button
                      as="a"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Login
                    </Disclosure.Button>
                  </Link>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
