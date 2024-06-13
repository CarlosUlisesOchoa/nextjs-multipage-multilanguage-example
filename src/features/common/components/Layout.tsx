import type { PropsWithChildren } from 'react'
import type { RouteLocale } from 'next-roots'
import { Nav } from '@/features/common/components/Nav'
import { Footer } from '@/features/common/components/Footer'
import { getHomeHref, getAboutHref } from '@/server/router'
import { getDictionary } from '@/server/utils/getDictionary'
import '@/features/common/styles.css'

type RootLayoutProps = PropsWithChildren<{ locale: RouteLocale }>

async function getNavigation(locale: string) {
  const t = await getDictionary(locale)
  return [
    { name: t('nav.Home'), href: getHomeHref(locale) },
    { name: t('nav.About'), href: getAboutHref(locale) },
  ]
}

/**
 * Root layout is meant to be used as top level layout for all routes.
 * That means it should be used only in /en/layout.ts, /es/layout.ts
 *
 * @param param0
 * @returns
 */
export async function Layout({ children, locale }: RootLayoutProps) {
  const navigation = await getNavigation(locale)

  return (
    <html lang={locale} className='h-full bg-gray-100'>
      <body className='h-full'>
        <div className='flex min-h-full flex-col'>
          <Nav items={navigation} />
          <main className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
