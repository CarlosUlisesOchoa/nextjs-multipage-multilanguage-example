/* eslint-disable react/jsx-closing-bracket-location */
'use client'

import HamburgerIcon from '@/Icons/HamburgerIcon'
import XIcon from '@/Icons/XIcon'
import clsx from 'clsx'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { usePathname } from 'next/navigation'

type NavItem = { name: string; href: string }
type NavProps = { items: NavItem[] }

export function Nav({ items }: Readonly<NavProps>) {
  const pageHref = usePathname()
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <div className='hidden md:block'>
                  <div className='ml-10 flex items-baseline space-x-4'>
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.href === pageHref
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.href === pageHref ? 'page' : undefined}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='-mr-2 flex md:hidden'>
                {/* Mobile menu button */}
                <DisclosureButton className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <HamburgerIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className='md:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
              {items.map((item) => (
                <DisclosureButton
                  key={item.name}
                  className={clsx(
                    item.href === pageHref
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.href === pageHref ? 'page' : undefined}>
                  <Link href={item.href}>{item.name}</Link>
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
