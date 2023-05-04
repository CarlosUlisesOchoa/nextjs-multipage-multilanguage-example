/* eslint-disable react/jsx-closing-bracket-location */
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Router, schema } from 'next-roots'

const router = new Router(schema)

interface FooterProps {
  // eslint-disable-next-line no-undef
  locales: Array<{ name: string; shortName: string; href: string }>
}

// eslint-disable-next-line no-undef
export const LanguageSwitcher = ({ locales }: FooterProps) => {
  const pageHref = usePathname()
  // const currentLanguage = router.getLocaleFromHref(pageHref) //tetemp
  const { name } = router.getRouteFromHref(pageHref)

  function getCurrentLinkInAnotherLanguage(localeShortName: string): string {
    return router.getHref(name, { locale: localeShortName })
  }

  function getTheClass(href: string, currentPageHref: string): string {
    // console.log(locales)
    // console.log(pageHref)
    // console.log(href)
    return pageHref === href ? 'font-bold' : 'font-medium'
  }

  return (
    <div className='flex justify-center space-x-4'>
      {locales.map((locale) => {
        const href = getCurrentLinkInAnotherLanguage(locale.shortName)
        const className = `${getTheClass(
          href,
          pageHref
        )} px-3 py-2 text-sm text-gray-500`

        return (
          <Link key={locale.name} href={href} className={className}>
            {locale.name}
          </Link>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
