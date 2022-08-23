import { Session } from 'next-auth';
import Image from 'next/image';

import { Menu } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

interface Props {
  session: Session;
}

export default function ProfileDropdown({ session }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Image
            src={session!.user!.image!}
            width="24"
            height="24"
            priority={true}
            className="rounded-full"
          />
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        <div>
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? (
                      <ChevronUpIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => alert('Hey')}>
                    {active ? (
                      <ChevronUpIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </div>
      </div>
    </Menu>
  );
}
