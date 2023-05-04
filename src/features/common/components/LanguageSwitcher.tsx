/* eslint-disable react/jsx-closing-bracket-location */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Router, schema } from 'next-roots'

import type { RouteNameStatic } from 'next-roots'

interface FooterProps {
  // eslint-disable-next-line no-undef
  locales: Array<{ name: string; shortName: string; href: string }>
}

const router = new Router(schema)

export const LanguageSwitcher = ({ locales }: FooterProps) => {
  const currentRelativePath = usePathname() // current URL,for example: '/es/acerca'
  const currentStaticRouteName: RouteNameStatic = router.getRouteFromHref(currentRelativePath)?.name ?? '/' // for example: '/about', it's the original route name, no matter the current language

  return (
    <div className='flex justify-center space-x-4'>
      {locales.map((locale) => {
        const href = router.getHref(currentStaticRouteName, { locale: locale.shortName })
        const classes = `${
          currentRelativePath === href ? 'font-bold' : 'font-medium'
        } px-3 py-2 text-sm text-gray-500`

        return (
          <Link key={locale.name} href={href} className={classes}>
            {locale.name}
          </Link>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
