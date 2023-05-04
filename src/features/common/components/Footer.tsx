import { getHomeHref } from '@/server/router'
import { LanguageSwitcher } from '@/features/common/components/LanguageSwitcher'

function getLocales() {
  return [
    { name: 'English', shortName: 'en', href: getHomeHref('en') },
    { name: 'Español', shortName: 'es', href: getHomeHref('es') },
  ]
}

export function Footer() {
  const locales = getLocales()
  return (
    <>
      <footer className='py-6'>
        <LanguageSwitcher locales={locales} />
      </footer>
    </>
  )
}
