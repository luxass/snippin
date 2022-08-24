import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CogIcon } from '@heroicons/react/outline';

interface Props {}

export default function Sidebar({}: Props) {
  const { pathname } = useRouter();
  return (
    <aside className="w-full md:w-48 lg:w-64 bg-[#295270] bg-opacity-40 backdrop-blur p-2 flex flex-col">
      <Link href="" passHref>
        <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1">
          Lo
        </a>
      </Link>
      <Link href="" passHref>
        <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1">
          Lo
        </a>
      </Link>
      <Link href="" passHref>
        <a className="block bg-black bg-opacity-20 rounded px-3 py-1 hover:bg-opacity-30 my-1">
          Lo
        </a>
      </Link>
      <div className="flex-1"></div>

      <Link href="/dashboard/settings" passHref>
        <a className="bg-black bg-opacity-20 rounded px-3 py-3 hover:bg-opacity-30 my-1 group text-violet-200">
          <CogIcon className="inline-block h-6 w-6 group-hover:animate-slow-spin" aria-hidden="true" />
          <span className="ml-2 align-middle group-hover:text-white">Settings</span>
        </a>
      </Link>
    </aside>
  );
}
