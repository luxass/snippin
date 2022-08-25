import Link from 'next/link';

import { CogIcon } from '@heroicons/react/outline';

interface Props {}

export default function Sidebar({}: Props) {
  return (
    <aside className="w-full md:w-48 lg:w-64 bg-[#295270] bg-opacity-40 backdrop-blur p-2 flex flex-col">
      <Link href="/new" passHref>
        <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1 text-violet-200 hover:text-white">
          Create a new Snippet Collection
        </a>
      </Link>
      <Link href="/dashboard/collections" passHref>
        <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1 text-violet-200 hover:text-white">
          Collections
        </a>
      </Link>
      <h3 className="mt-4 text-xl text-violet-200">Favorite</h3>
      <ul>
        <li>
          <Link href="" passHref>
            <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1 text-violet-200 hover:text-white">
              Favorite 1
            </a>
          </Link>
          <Link href="" passHref>
            <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1 text-violet-200 hover:text-white">
              Favorite 1
            </a>
          </Link>
          <Link href="" passHref>
            <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1 text-violet-200 hover:text-white">
              Favorite 1
            </a>
          </Link>
        </li>
      </ul>
      <div className="flex-1" />
      <Link href="/dashboard/settings" passHref>
        <a className="bg-black bg-opacity-20 rounded px-3 py-3 hover:bg-opacity-30 my-1 group text-violet-200">
          <CogIcon
            className="inline-block h-6 w-6 group-hover:animate-slow-spin"
            aria-hidden="true"
          />
          <span className="ml-2 align-middle group-hover:text-white">Settings</span>
        </a>
      </Link>
    </aside>
  );
}
